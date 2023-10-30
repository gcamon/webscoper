'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema ({

    name: {
      type: String,
      default: ""
    },

    password: {
      type: String,
      default: ""
    },

    email: {
      type: String,
      default: ''
    },

    profile_pic_url: {
      type: String,
      default: ""
    },

    deleted: {
        type: Boolean,
        default: false
    },

    isAdmin: {
      type: Boolean,
      default: false
    }
     
},{ timestamps: true })


mongoose.model('User', UserSchema);