const mongoose = require('mongoose');

const page3BilenmisTakimSchema  = new mongoose.Schema({
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

module.exports = mongoose.model('Page3BilenmisTakim', page3BilenmisTakimSchema);