const express = require('express');
const router = express.Router();
const takimListesiController = require('../controller/takimListesiController')


router.route('/').get(takimListesiController.getTakimListesi).post(takimListesiController.createTakimListesi)



router.route('/:id').get(takimListesiController.getTakim)
.delete(takimListesiController.deleteTakim)
.patch(takimListesiController.updateTakim)
.put(takimListesiController.modifyYacht)



module.exports = router;