const mongoose = require('mongoose');

const bilenmisTakimListesiSchema = new mongoose.Schema({
    seriNo: {
        type: String
    },
    tanim: {
        type: String
    },
    bilemeOrKirilma: {
        type: String,
    },
    operator: {
        type: String,
    },
    toplamAdet: {
        type: Number,
    },
    gonderilenAdet: {
        type: Number,
    },
    kalan: {
        type: Number,
    },
    gelisTarihi: {
        type: Date,
    },
    guncelStok:{
        type:Number
    }
  

});

module.exports = mongoose.model('BilenmisTakimListesi', bilenmisTakimListesiSchema);