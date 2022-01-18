// user.js
// Author S. Sigman   Date: 11/29/2021
// Defines a MongoDB-Mongoose model for 
// application users.

var db = require("../db");

var User = db.model("User", {
    fname: String,
    lname: String,
    email: String,
    dateCreated: {type: Date, default: Date.now},
    password: {type: String, default: ''},
    profilePict: {type: String, default: 'profile.png'},
    profile: {type: String, default: 'My story ...'}
})

module.exports = User;