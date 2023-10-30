const express = require("express");
const config = require("./config");

//start db connections
require('./mongoose'); 

// require('./model/Recipe');

// require('./model/User');

// require('./model/Resturant');

const port = process.env.PORT || 3005;

const app = express();


config(app);



app.listen(port, () => console.log(`Server running on port ${port}`));