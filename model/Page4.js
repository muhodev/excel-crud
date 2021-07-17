const mongoose = require('mongoose');

const page4Schema  = new mongoose.Schema({
    siraNo: {
        type: Number,
    },
    seriNo: {
        type: String
    },
    tanim: {
        type: String
    },
    takimAdeti:{
        type:Number
    }
  

});

module.exports = mongoose.model('Page4', page4Schema);