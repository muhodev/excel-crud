const express = require('express');
const router = express.Router();
const takimTakipListesiController = require('../controller/takimTakipListesiController')


router.route('/').get(takimTakipListesiController.getTakimTakipListesi).post(takimTakipListesiController.createTakimTakipListesi)



router.route('/:id').get(takimTakipListesiController.getTakimTakip)
.delete(takimTakipListesiController.deleteTakimTakip)
.patch(takimTakipListesiController.updateTakimTakip)
.put(takimTakipListesiController.modifyYacht)



module.exports = router;