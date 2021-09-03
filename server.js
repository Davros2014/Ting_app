const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

//cors options
var allowedOrigins = [
    "https://ting-app.herokuapp.com",
    "http://localhost:3000"
];
let corsOptions = {
    origin: allowedOrigins,
    optionsSuccessStatus: 200,
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
}

// app.use(express.static(path.join(__dirname, "client/build")));
console.log("path.join(__dirname)", path.join(__dirname, "client/build"));

//routes
app.use("/api/dashboard", require("./routes/dashboard"));
app.use("/api/authentication", require("./routes/jwtAuth"));

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});
