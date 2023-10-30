
const sessionChecker = require('../verifyPassword');
const User = require("../model/FakeUser")

const user = (app) => {
    app.get("/users", async (req, res) => {
        try{
            const users = await User.find();
            res.render("users", {users})
        } catch(err) {
            res.status(500).json({status: false, message: "internal error occured"})
        }        
    })

    app.get("/user/:name", async (req, res) => {
        try {
            const user = await User.findOne({name: req.params.name});
            if(user){
                res.render("user",user)
            } else {
                res.status(404).json({status: false, message: "User not found"})
            }
        } catch(err) {
            res.status(500).json({status: false, message: "internal server error"})
        }
    })

    app.post("/user", (req, res) => {
        res.status(200).json({status: true, message: "User added successfully!"})
    })

    app.get("/profile", async (req, res) => {
       try {
            if(req.session.profile) {
                const user = await User.findById(req.session?.profile?._id)
                if(user) {
                    res.render("profile",user)
                } else {
                    res.render("profile", {name:"",email:"",phone:""})
                }
            } else {
                res.status(403).json({status: false, message: "Not authenticated"})
            }
       } catch(err) {
            res.status(500).json({status: false, message: "internal server erro"})
       }
        
    });

}

module.exports = user;