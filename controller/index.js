const db = require('./../model/index')
class IoTPetFeeder {
    constructor() {
        
    }
    index(req, res) {
        res.render('index', { title: 'Dashboard' });
    }
    async saveTemperature(req, res) {
        const { room_id, tempValue } = req.body;
        if (!room_id || !tempValue) {
            return res.status(400).json({ 
                status: "ERROR",
                description: "Temperature is required"
            });
        }
        try {
            let getCurrentTemperature = await db.getLastRoomTemperature(room_id);
            let is_temp_same = false;
            if (getCurrentTemperature.length) {
                if (tempValue == getCurrentTemperature[0]["temperature"]) {
                    await db.updateTemperatureTimestamp(getCurrentTemperature[0]["id"])
                    is_temp_same = true;
                }
            }
            if (is_temp_same == false) {
                await db.saveTemperature(room_id, tempValue)
            }
            res.status(200).json({ 
                status:"SUCCESS", 
                message: "Temperature recorded"
            });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async getCurrentRoomTemperature(req, res) {
        let result = await db.getLastRoomTemperature(1);
        res.status(200).json(result);
    }
    async saveTemperatureSettings(req, res) {
        const { tempValue } = req.body;
        if (!tempValue) {
            return res.status(400).json({ 
                status: "ERROR",
                description: "Temperature is required"
            });
        }
        try {
            await db.removeTemperatureSettings();
            await db.saveTemperatureSettings(tempValue)
            res.status(200).json({
                status: "SUCCESS",
                message: "Temperature recorded"
            });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async getTemperatureConfig(req, res) {
        let result = await db.getTemperatureConfig(1);
        res.status(200).json(result);
    } 
    saveMobileNumber(req, res) {

    }
    savePetFeedingTime(req, res) {

    }
}

module.exports = new IoTPetFeeder()