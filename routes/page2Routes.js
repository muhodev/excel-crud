const express = require('express');
const router = express.Router();
const page2Controller = require('../controller/page2Controller')


router.route('/').get(page2Controller.getBilenmisTakimListesi).post(page2Controller.createBilenmisTakim)



router.route('/:id').get(page2Controller.getBilenmisTakim)
.delete(page2Controller.deleteBilenmisTakim)
.patch(page2Controller.updateBilenmisTakim)
.put(page2Controller.modifyYacht)



module.exports = router;