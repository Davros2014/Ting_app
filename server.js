const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 5000;

let corsOptions = {
    origin: ["http://localhost:3000", "https://ting-app.herokuapp.com/"],
    optionsSuccessStatus: 200,
    credentials: true
};

//middleware
app.use(cors(corsOptions));
app.use(express.json());

// app.use(express.static("./public"));

app.get("/products/:id", function(req, res, next) {
    res.json({ msg: "This is CORS-enabled for only example.com." });
});

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
// });
app.use(express.static(path.join(__dirname, "client/build")));

//routes
app.use("/api/dashboard", require("./routes/dashboard"));
app.use("/api/authentication", require("./routes/jwtAuth"));

app.listen(port, () => {
    console.log(`Server is starting on port ${port}`);
});
