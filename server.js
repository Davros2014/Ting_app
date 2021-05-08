const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 5000;

console.log("process.env.PORT", process.env.PORT);
//middleware
app.use(cors());
app.use(express.json());

// app.use(express.static("./public"));

app.use(express.static(path.join(__dirname, "client/build")));

//routes
app.use("/api/dashboard", require("./routes/dashboard"));
app.use("/api/authentication", require("./routes/jwtAuth"));

app.listen(port, () => {
    console.log(`Server is starting on port ${port}`);
});
