const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

//routes
app.use("/dashboard", require("./server/routes/dashboard"));
app.use("/authentication", require("./server/routes/jwtAuth"));

app.listen(port, () => {
    console.log(`Server is starting on port ${port}`);
});
