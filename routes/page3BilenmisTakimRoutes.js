const express = require('express');
const router = express.Router();
const page3BilenmisTakim = require('../controller/page3BilenmisTakim')


router.route('/').get(page3BilenmisTakim.getBilenmisTakimListesi).post(page3BilenmisTakim.createBilenmisTakim)



router.route('/:id').get(page3BilenmisTakim.getBilenmisTakim)
.delete(page3BilenmisTakim.deleteBilenmisTakim)
.patch(page3BilenmisTakim.updateBilenmisTakim)
.put(page3BilenmisTakim.modifyYacht)



module.exports = router;