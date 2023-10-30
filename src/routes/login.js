const passwordVerify = require("../verifyPassword")
const bcrypt = require("bcryptjs")
const User = require("../model/FakeUser")

const login = (app) => {
    app.get("/login", (req, res) => {
        res.render("login")
    });

    app.post("/login", passwordVerify, async(req, res) => { 
        if(req.session.profile){
            res.redirect("/profile")
        } else {
            res.redirect("/login")
        }
    })
    

    app.get("/logout", (req, res) => {
        req.session.destroy(function(err) {
            console.log('Destroyed session')
        })
        res.redirect('/');
    })

}

module.exports = login;