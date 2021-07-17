const express = require('express');
const router = express.Router();
const klavuzContoller = require('../controller/klavuzController')


router.route('/').get(klavuzContoller.getBilenmisTakimListesi).post(klavuzContoller.createBilenmisTakim)



router.route('/:id').get(klavuzContoller.getBilenmisTakim)
.delete(klavuzContoller.deleteBilenmisTakim)
.patch(klavuzContoller.updateBilenmisTakim)
.put(klavuzContoller.modifyYacht)



module.exports = router;