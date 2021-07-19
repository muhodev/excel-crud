const mongoose = require('mongoose');

const Kullanici  = new mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String
    },
    role:{
        type:String,
        default:'moderator'
    }

  

});

module.exports = mongoose.model('Kullanici', Kullanici);