const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 5000;

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

app.use(express.json());
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "client/build")));

//routes
app.use("/api/dashboard", require("./routes/dashboard"));
app.use("/api/authentication", require("./routes/jwtAuth"));

app.listen(port, () => {
    console.log(`Server is starting on port ${port}`);
});
