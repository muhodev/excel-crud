const express = require('express');
const router = express.Router();
const freezeTakimListesiController = require('../controller/freezeTakimListesiController')


router.route('/').get(freezeTakimListesiController.getBilenmisTakimListesi).post(freezeTakimListesiController.createBilenmisTakim)



router.route('/:id').get(freezeTakimListesiController.getBilenmisTakim)
.delete(freezeTakimListesiController.deleteBilenmisTakim)
.patch(freezeTakimListesiController.updateBilenmisTakim)
.put(freezeTakimListesiController.modifyYacht)



module.exports = router;