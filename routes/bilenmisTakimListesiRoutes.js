const express = require('express');
const router = express.Router();
const bilenmisTakimListesi = require('../controller/bilenmisTakimListesiController')


router.route('/').get(bilenmisTakimListesi.getBilenmisTakimListesi).post(bilenmisTakimListesi.createBilenmisTakim)



router.route('/:id').get(bilenmisTakimListesi.getBilenmisTakim)
.delete(bilenmisTakimListesi.deleteBilenmisTakim)
.patch(bilenmisTakimListesi.updateBilenmisTakim)
.put(bilenmisTakimListesi.modifyYacht)



module.exports = router;