'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;



const ResturantSchema = new Schema ({
    name: {
      type: String,
      default: ""
    },

    city: {
      type: String,
      default: ""
    },

    address: {
      type: String,
      default: ""
    },
    
    deleted: {
        type: Boolean,
        default: false
    }

},{ timestamps: true })


module.exports = mongoose.model('Resturant', ResturantSchema);