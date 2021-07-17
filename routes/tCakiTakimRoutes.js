const express = require('express');
const router = express.Router();
const tCakiTakimController = require('../controller/tCakiTakimController')


router.route('/').get(tCakiTakimController.getBilenmisTakimListesi).post(tCakiTakimController.createBilenmisTakim)



router.route('/:id').get(tCakiTakimController.getBilenmisTakim)
.delete(tCakiTakimController.deleteBilenmisTakim)
.patch(tCakiTakimController.updateBilenmisTakim)
.put(tCakiTakimController.modifyYacht)



module.exports = router;