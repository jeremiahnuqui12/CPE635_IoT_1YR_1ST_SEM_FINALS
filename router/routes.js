const express = require('express');
const router = express.Router();
const indexController = require('../controller/index');

// Dashboard Routes
router.get('/', indexController.index);
router.post('/api/save_temperature_settings', indexController.saveTemperatureSettings);
router.get("/api/get_temperature_config", indexController.getTemperatureConfig);



// ESP Routes
router.post('/api/save_temperature', indexController.saveTemperature);
router.get('/api/get_current_room_temperature', indexController.getCurrentRoomTemperature);


module.exports = router;
