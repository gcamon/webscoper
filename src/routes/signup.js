const User = require("../model/FakeUser");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const signup = (app) => {

    app.get("/signup", (req, res) => {
        res.render("signup")
    })

    app.post("/signup", async (req, res) => {
        try {
            const user = await User.findOne({email: req.body.email});
            if(user){
                res.status(200).json({status: false, message: "User with the email already exist."})
            } else {
                const {password, ...info} = req.body;
                const hash = bcrypt.hashSync(password, salt);
                const payLoad = {...info, password: hash}
                const newUser = new User(payLoad);
                const saveUser = await newUser.save();
                console.log(saveUser)
                res.redirect("/login")
            }
        } catch(err) {
            console.log(err)
            res.status(500).json({status: false, message: "Internal error occured"})
        }
    })

}

module.exports = signup;