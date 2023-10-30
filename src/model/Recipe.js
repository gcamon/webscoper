'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const RecipeSchema = new Schema ({
    name: {
      type: String,
      default: ""
    },

    cal: {
        type: String,
        default: ""
    },

    price: {
      type: Number,
      default: 10000
    },

    photoURL: {
        type: String,
        default: ""
    },
    
    deleted: {
        type: Boolean,
        default: false
    }

},{ timestamps: true })


module.exports = mongoose.model('Recipe', RecipeSchema);