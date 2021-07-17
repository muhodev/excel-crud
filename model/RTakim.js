const mongoose = require('mongoose');

const rTakim = new mongoose.Schema({
    siraNo: {
        type: Number,
    },
    seriNo: {
        type: String
    },
    tanim: {
        type: String
    },
    takimAdeti: {
        type: Number,
    }
  

});

module.exports = mongoose.model('RTakim', rTakim);