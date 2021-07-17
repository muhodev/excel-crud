const express = require('express');
const router = express.Router();
const bilenecekTakimController = require('../controller/bilenecekTakimController')


router.route('/').get(bilenecekTakimController.getBilenmisTakimListesi).post(bilenecekTakimController.createBilenmisTakim)



router.route('/:id').get(bilenecekTakimController.getBilenmisTakim)
.delete(bilenecekTakimController.deleteBilenmisTakim)
.patch(bilenecekTakimController.updateBilenmisTakim)
.put(bilenecekTakimController.modifyYacht)



module.exports = router;