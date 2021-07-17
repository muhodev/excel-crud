const mongoose = require('mongoose');

const bilenecekMatkapSchema  = new mongoose.Schema({
    siraNo: {
        type: Number,
    },
    seriNo: {
        type: String
    },
    tanim: {
        type: String
    },
    adet: {
        type: Number,
    },
    takimAdeti:{
        type:Number
    }
  

});

module.exports = mongoose.model('BilenecekMatkap', bilenecekMatkapSchema);