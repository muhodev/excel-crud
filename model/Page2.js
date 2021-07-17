const mongoose = require('mongoose');

const page2Schema = new mongoose.Schema({
    operator: {
        type: String,
    },
    parmakFreze: {
        type: String
    },
    matkap: {
        type: String
    },
    klavuz: {
        type: String,
    },
    tCaki: {
        type: String,
    },
    rayba: {
        type: String,
    },
     tarama: {
        type: String,
    },
     cikisTarihi: {
        type: String,
    },
    gelisTarihi: {
        type: String,
    }
  

});

module.exports = mongoose.model('Page2', page2Schema);