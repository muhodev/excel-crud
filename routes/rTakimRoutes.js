const express = require('express');
const router = express.Router();
const rTakimController = require('../controller/rTakimController')


router.route('/').get(rTakimController.getBilenmisTakimListesi).post(rTakimController.createBilenmisTakim)



router.route('/:id').get(rTakimController.getBilenmisTakim)
.delete(rTakimController.deleteBilenmisTakim)
.patch(rTakimController.updateBilenmisTakim)
.put(rTakimController.modifyYacht)



module.exports = router;