const mongoose = require('mongoose');

const parmakFreeze = new mongoose.Schema({
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
    },
    adet: {
        type: Number,
    },
    kalanAdet: {
        type: Number,
    },
    gelisTarihi: {
        type: Date,
    },
    bitisTarihi: {
        type: Date,
    }
  

});

module.exports = mongoose.model('ParmakFreeze', parmakFreeze);