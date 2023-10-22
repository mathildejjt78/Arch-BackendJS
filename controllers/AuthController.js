const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const authentificate = require("../models/authentificate");

exports.register = (req, res) => {
    const {username, email, password} = req.body;
    const user = new authentificate({username, email, password});
    user.save(err => {
        if(err) {
            res.status(500).send("Error registering new user please try again.");
        } else {
            res.status(200).send("Welcome!");
        }
    });
}


exports.login = (req, res) => {
    bcrypt.compare(password, user.password, (err, same) => {
    const {username, password} = req.body;
    User.findOne({username}, (err, user) => {
        if(err) {
            console.error(err);
            res.status(500).json({
                error: "Internal error please try again"
            });
        } else if (!user) {
            res.status(401).json({
                error: "Incorrect username or password"
            });
        } else {
            user.isCorrectPassword(password, (err, same) => {
                if(err) {
                    res.status(500).json({
                        error: "Internal error please try again"
                    });
                } else if (!same) {
                    res.status(401).json({
                        error: "Incorrect username or password"
                    });
                } else {
                    // Issue token
                    const payload = {username};
                    const token = jwt.sign(payload, process.env.JWT_SECRET, {
                        expiresIn: "1h",
                    });
                    res.cookie("token", token, {httpOnly: true}).sendStatus(200);
                }
            });
        }
    });
});




exports.logout = (req, res) => {
    res.status(200).clearCookie("token").json({ message: "You are deconnected" });
  };
};
