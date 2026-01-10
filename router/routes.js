const express = require('express');
const router = express.Router();
const indexController = require('../controller/index');

// Dashboard Routes
router.get('/', indexController.index);
router.post('/api/save_temperature_settings', indexController.saveTemperatureSettings);
router.get("/api/get_temperature_config", indexController.getTemperatureConfig);

router.post("/api/save_feeding_time", indexController.savePetFeedingTime);
router.get("/api/get_feeding_time", indexController.getFeedingTime);
router.post("/api/remove_feeding_time", indexController.removeFeedingTime)



// ESP Routes
router.post('/api/save_temperature', indexController.saveTemperature);
router.get('/api/get_current_room_temperature', indexController.getCurrentRoomTemperature);


module.exports = router;
