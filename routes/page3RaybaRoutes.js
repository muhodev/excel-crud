const express = require('express');
const router = express.Router();
const raybaController = require('../controller/raybaController')


router.route('/').get(raybaController.getBilenmisTakimListesi).post(raybaController.createBilenmisTakim)



router.route('/:id').get(raybaController.getBilenmisTakim)
.delete(raybaController.deleteBilenmisTakim)
.patch(raybaController.updateBilenmisTakim)
.put(raybaController.modifyYacht)



module.exports = router;