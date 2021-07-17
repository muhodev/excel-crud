const express = require('express');
const router = express.Router();
const parmakFreezeController = require('../controller/parmakFreezeController')


router.route('/').get(parmakFreezeController.getBilenmisTakimListesi).post(parmakFreezeController.createBilenmisTakim)



router.route('/:id').get(parmakFreezeController.getBilenmisTakim)
.delete(parmakFreezeController.deleteBilenmisTakim)
.patch(parmakFreezeController.updateBilenmisTakim)
.put(parmakFreezeController.modifyYacht)



module.exports = router;