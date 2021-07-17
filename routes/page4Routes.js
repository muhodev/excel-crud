const express = require('express');
const router = express.Router();
const page4Controller = require('../controller/page4Controller')


router.route('/').get(page4Controller.getBilenmisTakimListesi).post(page4Controller.createBilenmisTakim)



router.route('/:id').get(page4Controller.getBilenmisTakim)
.delete(page4Controller.deleteBilenmisTakim)
.patch(page4Controller.updateBilenmisTakim)
.put(page4Controller.modifyYacht)



module.exports = router;