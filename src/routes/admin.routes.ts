const adminController = require('../controllers/admin.controller');
const express = require('express');

const router = express.Router();

router.post('/add-book', adminController.addBook);
router.put('/update-book',adminController.updateBook);
router.put('/remove-book/:book_id',adminController.removeBook);


module.exports = router;

export {}