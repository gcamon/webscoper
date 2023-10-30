const bcrypt = require("bcryptjs")
const User = require("./model/FakeUser")
const passwordVerify = async (req,res, next) => {
    try {
        const user = await User.findOne({email: req.body.email})      
        if(!user) {
            res.status(403).json({status: false, message: "User with email not found"})
        } else {
            const comparePassword = bcrypt.compareSync(req.body.password, user.password)
            if(comparePassword)  {
                req.session.profile = (comparePassword) ? user : null;
                next();
            } else {
                res.render('login')
            }        
           
        }

    } catch(err) {
        res.status(500).json({status: false, message: "internal server error"});
    }
}

module.exports = passwordVerify;