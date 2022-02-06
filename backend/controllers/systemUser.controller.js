const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
process.env.JWT_KEY = "secret";



//creating users with unique email and hashed password.

function signUp(req, res) {


    models.SystemUser.findOne({ where: { email: req.body.email } }).then(result => {
        if (result) {
            res.status(409).json({
                message: "Email already exist"
            });
        } else {
            bcryptjs.genSalt(10, function (err, salt) {
                bcryptjs.hash(req.body.password, salt, function (err, hash) {
                    const user = {
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                    }

                    models.SystemUser.create(user).then(result => {
                        res.status(201).json({
                            message: "User created successfully"
                        });

                    }).catch(error => {
                        res.status(500).json({
                            message: "Something went wrong!",
                        });

                    });

                });
            });


        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        });
    });
}

//login function

function login(req, res) {
    models.SystemUser.findOne({ where: { email: req.body.email } }).then(systemUser => {
        if (systemUser === null) {
            res.status(401).json({
                message: "Invalid email!",
            });
        } else {
            bcryptjs.compare(req.body.password, systemUser.password, function (err, results) {
                if (results) {
                    const token = jwt.sign({
                        email: systemUser.email,
                        userId: systemUser.id
                    }, process.env.JWT_KEY, function (err, token) {
                        res.status(200).json({
                            message: "Authentication susccessful!",
                            token: token
                        });

                    });
                } else {
                    res.status(401).json({
                        message: "Invalid password",
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        });
    });
}

module.exports = {
    signUp: signUp,
    login: login
}