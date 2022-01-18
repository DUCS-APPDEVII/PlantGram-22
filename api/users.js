// Defines the routes for the userApi.
// author: S. Sigman Created: 11/29/2021
// 
// api        verb     description           status codes
// /creatUser POST   Create a user account   201 - created
//                                           400 - db error
//                                           409 - duplicate user
//
// Modifications:
// 
const User = require("../models/user");
const router = require("express").Router();
const DEBUG = true;

router.post('/', (req,res)=>{
    if (DEBUG) {
        console.log(`Name: ${req.body.fname} ${req.body.lname}`);
        console.log(`email: ${req.body.email}`);
        console.log(`password: ${req.body.passWd}`);
        console.log(`Profile Pict Name: ${req.body.profPict}`);
        console.log(`Profile: ${req.body.profile}`);
    }

    // check to see if the user exists

    User.findOne({email: {$eq: req.body.email}}, (err, user) => {
        if (DEBUG) {
            console.log(`User: ${user}. Undefined indicates not duplicate.`);
        }
        if (err)
            res.status(400).json({msg: "database error"});
        else {
            // query ran - user may have been found or
            // may not have been
            if (user) {
                // user was found - send 409 error - 
                //duplicate user
                res.status(409).json({msg: `User ${req.body.email} already exists.`});
            }
            else {
                // user does not exist - add them
                let newUser = new User({
                    fname: req.body.fname,
                    lname: req.body.lname,
                    email: req.body.email,
                    dateCreated: Date.now(),
                    password: req.body.passWd,
                    profilePict: req.body.profPict,
                    profile: req.body.profile
                });
               
                newUser.save((err, stu) => {
                    if (err) {
                    res.status(400).json({msg: "Database error"});
                    } else {
                    res.status(201).json({msg: 'account created'});
                    }
                });
            }
        } 
    });
});

module.exports = router;