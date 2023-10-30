const multer = require("multer");
const express = require("express")
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const session = require("express-session");
const User = require("./model/User")
const recipe = require("./routes/recipe");
const user = require("./routes/user");
const login = require("./routes/login");
const signup = require("./routes/signup");
const resturant = require("./routes/resturant");
const cookieParser = require("cookie-parser");
const MongoDBStore = require('connect-mongodb-session')(session)
const storeDB = process.env.MONGO_URL;


const config = (app) => {

    app.use('/assets',express.static(__dirname + '/public'));

    const store = new MongoDBStore(
      {
        uri: storeDB,
        collection: 'mySessions'
    });

    //middleware
	app.use(session({
        secret: '937348',
        resave: true,	  
        saveUninitialized: true,
        store: store,
        cookie: {
            httpOnly: true, 
            maxAge: 3600000 * 24, // 24 hours
            path: "/"
        } 
    }));

    //app.use(passport.initialize());
	//app.use(passport.session());	
    app.use(cookieParser());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json({limit: '200mb'}));
    

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./uploads")
        },
        filename: function (req, file, cb) {
            console.log(file)
            cb(null, path.extname(file.originalname))
        }
    })

    const upload = multer({storage: storage});

    app.use(upload.any());


    app.engine('.html', require('ejs').renderFile);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/views');

    
    recipe(app);
    resturant(app);
    login(app);
    signup(app);
    user(app);

	
    // passport.serializeUser(function(user, done) {   
    // 	done(null, user._id);
	// });

	
	// passport.deserializeUser(function(id, done) {
	// 	User.findById(id, function(err, user) {		
	// 		done(err, user);				
	// 	});
	// })
    
    
   
}

module.exports = config;