const adminController = require('../controllers/admin.controller');
const express = require('express');

const router = express.Router();

router.post('/add-books', adminController.addBook)

module.exports = router;

export {}