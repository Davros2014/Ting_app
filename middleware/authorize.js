const jwt = require("jsonwebtoken");
require("dotenv").config();

//this middleware will continue on if a valid token is found inside local storage
module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header("jwt_token");
    // Check if no token
    if (!token) {
        return res.status(403).json({ msg: "authorization denied" });
    }
    // Verify token
    try {
        //it is going to give use the user id (user:{id: user.id})
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        // if both match then true and go to next
        req.user = verify.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};
