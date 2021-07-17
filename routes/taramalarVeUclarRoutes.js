const express = require('express');
const router = express.Router();
const taramalarVeUclarController = require('../controller/taramalarVeUclarController')


router.route('/').get(taramalarVeUclarController.getBilenmisTakimListesi).post(taramalarVeUclarController.createBilenmisTakim)



router.route('/:id').get(taramalarVeUclarController.getBilenmisTakim)
.delete(taramalarVeUclarController.deleteBilenmisTakim)
.patch(taramalarVeUclarController.updateBilenmisTakim)
.put(taramalarVeUclarController.modifyYacht)



module.exports = router;