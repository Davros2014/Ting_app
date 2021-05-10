const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 5000;

var allowedOrigins = [
    "http://localhost:3000",
    "https://ting-app.herokuapp.com"
];
//
let corsOptions = {
    origin: allowedOrigins,
    optionsSuccessStatus: 200,
    credentials: true
};

// let corsOptions = {
// 	origin: function(origin, callback){
//       // allow requests with no origin
//       // (like mobile apps or curl requests)
//       if(!origin) return callback(null, true);
//       if(allowedOrigins.indexOf(origin) === -1){
//         var msg = 'The CORS policy for this site does not ' +
//                   'allow access from the specified Origin.';
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//
//     optionsSuccessStatus: 200,
//     credentials: true
// };

//middleware
app.use(express.json());

// app.use(express.static("./public"));

// app.get("/products/:id", function(req, res, next) {
//     res.json({ msg: "This is CORS-enabled for only example.com." });
// });

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//     );
//     res.header(
//         "Access-Control-Allow-Methods",
//         "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//     );
//     res.header("Cross-origin-Embedder-Policy", "require-corp");
//     res.header("Cross-origin-Opener-Policy", "same-origin");
//     res.header(("Access-Control-Allow-Credentials", "true"));
//
//     if (req.method === "OPTIONS") {
//         res.sendStatus(200);
//     } else {
//         next();
//     }
// });

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "client/build")));

//routes
app.use("/api/dashboard", require("./routes/dashboard"));
app.use("/api/authentication", require("./routes/jwtAuth"));

app.listen(port, () => {
    console.log(`Server is starting on port ${port}`);
});
