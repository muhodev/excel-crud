const mongoose = require('mongoose');

const TCakiTakimSchema  = new mongoose.Schema({
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

module.exports = mongoose.model('TCakiTakim', TCakiTakimSchema);