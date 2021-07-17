const express = require('express');
const router = express.Router();
const kullanilmisTakimController = require('../controller/kullanilmisTakimController')


router.route('/').get(kullanilmisTakimController.getBilenmisTakimListesi).post(kullanilmisTakimController.createBilenmisTakim)



router.route('/:id').get(kullanilmisTakimController.getBilenmisTakim)
.delete(kullanilmisTakimController.deleteBilenmisTakim)
.patch(kullanilmisTakimController.updateBilenmisTakim)
.put(kullanilmisTakimController.modifyYacht)



module.exports = router;