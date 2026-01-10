const express = require('express');
const router = express.Router();
const indexController = require('../controller/index');

// Routes
router.get('/', indexController.index);
router.post('/api/save_temperature', indexController.saveTemperature);
router.get('/api/get_temperature', indexController.getCurrentTemperature);
// router.get('/inbox', smsController.getInbox);

module.exports = router;
