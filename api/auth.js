// Defines the routes for the authentication api.
// author: S. Sigman Created:       1/16/2022
// 
// api          verb     description           status codes
// /api/signin  post     authenticates a user  200 (authenticated)
//                       using both user id &  401 (authentication failed)
//                       password.             500 (batabase error)
//                                             
// Note:  This version of auth is not secure.  It needs to be
//        adapted to use a token.
// Modifications:
// 

const router = require("express").Router();
const User = require("../models/user");

// true turns display of debugging statements on
const DEBUG = true;
router.post("/signin", (req, res) => {
    if (DEBUG) {
        console.log(`Authentication request for ${req.body.signin}`);
        console.log(`with password ${req.body.password}`);
    }
    User.findOne({email: {$eq: req.body.signin}}, (err, user) => {
        if (!err) {
            if(user !== null) {
                console.log(`User from DB: ${user}`);
                // user found - check password
                if (user.password == req.body.password) {
                // user authenticated - return authentication msg
                res.status(200).json({msg: "authenticated",
                                        fname: user.fname});
                }
                else {
                    if (DEBUG) {
                        console.log("passwords did not match");
                    }
                    // user not authenticated - return error
                    res.status(401).json({msg: "auth failed"});
                }
            }
            else {
                if (DEBUG) {
                    console.log(`User ${req.body.password} not found.`);
                }
                // user not found - return error
                res.status(401).json({msg: "auth failed"});
            }
        }
        else {
            // database error -- return server error
            res.status(500).json({msg: "server error"});
        }
    });
});

module.exports = router;