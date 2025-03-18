const studentController = require('../controllers/student.controller');
const express = require('express');

const router = express.Router();

router.get('/view-all', studentController.viewBook);
router.get('/search/:name',studentController.searchBook);
router.get('/borrowBook/:book_id', studentController.borrowBook);
router.get('/returnBook/:book_id', studentController.returnBook);

module.exports = router;

export {}