const mongoose = require('mongoose');

const taramalarVeUclarSchema = new mongoose.Schema({
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
    }
  

});

module.exports = mongoose.model('TaramalarVeUclar', taramalarVeUclarSchema);