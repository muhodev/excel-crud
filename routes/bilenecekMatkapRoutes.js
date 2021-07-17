const express = require('express');
const router = express.Router();
const bilenecekMatkapContoller = require('../controller/bilenecekMatkapContoller')


router.route('/').get(bilenecekMatkapContoller.getBilenmisTakimListesi).post(bilenecekMatkapContoller.createBilenmisTakim)



router.route('/:id').get(bilenecekMatkapContoller.getBilenmisTakim)
.delete(bilenecekMatkapContoller.deleteBilenmisTakim)
.patch(bilenecekMatkapContoller.updateBilenmisTakim)
.put(bilenecekMatkapContoller.modifyYacht)



module.exports = router;