'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FakeUserSchema = new Schema ({
    name: {
      type: String,
      default: "",
    },

    password: {
      type: String,
      default: "",
      require: true
    },

    email: {
      type: String,
      default: "",
      require: true
    },

    phone: {
      type: String
    },

    active: {
        type: Boolean,
        default: false
    },

     
},{ timestamps: true })


module.exports = mongoose.model('FakeUser', FakeUserSchema);