const mongoose = require('mongoose');

const freezeTakimListesiSchema = new mongoose.Schema({
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

module.exports = mongoose.model('FreezeTakimListesi', freezeTakimListesiSchema);