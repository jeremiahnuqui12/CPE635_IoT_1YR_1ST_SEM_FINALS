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
                description: "Temperature recorded"
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
            res.status(400).json({ 
                status: "ERROR",
                description: "Temperature is required"
            });
            return;
        }
        try {
            await db.removeTemperatureSettings();
            await db.saveTemperatureSettings(tempValue)
            res.status(200).json({
                status: "SUCCESS",
                description: "Temperature settings has been saved"
            });
            return;
        } catch (err) {
            res.status(500).json({ 
                status: "ERROR",
                description: err.message
            });
            return;
        }
        return;
    }
    async getTemperatureConfig(req, res) {
        let result = await db.getTemperatureConfig(1);
        res.status(200).json(result);
    } 
    saveMobileNumber(req, res) {

    }
    async getFeedingTime(req, res) {
        let result = await db.getFeedingTime();
        res.status(200).json(result);
    }
    async savePetFeedingTime(req, res) {
        const { feeding_times } = req.body;
        let feeding_time_list = JSON.parse(feeding_times);
        if (!feeding_time_list || !Array.isArray(feeding_time_list)) {
            res.status(400).json({ 
                status: "ERROR",
                description: "Feeding time is invalid"
            });
            return;
        }
        try {
            let db_payload = [];
            feeding_time_list.map(x=>{
                db_payload.push(
                    [x]
                );
            });
            // console.log(db_payload);
            await db.removeFeedingTime()
            await db.saveFeedingTimes(db_payload);
            res.status(200).json({
                status: "SUCCESS",
                description: "Feeding time has been saved"
            });
            return;
        } catch (err) {
            res.status(500).json({ 
                status: "ERROR",
                description: err.message
            });
            return;
        }
    }
    async removeFeedingTime(req,res) {
        const { feeding_time_id } = req.body;
        if (!feeding_time_id) {
            res.status(400).json({ 
                status: "ERROR",
                description: "Feeding time id is required"
            });
            return;
        }
        try {
            let db_payload = [];
            await db.removeFeedingTimeRecord(feeding_time_id)
            res.status(200).json({
                status: "SUCCESS",
                description: "Feeding has been removed"
            });
            return;
        } catch (err) {
            res.status(500).json({ 
                status: "ERROR",
                description: err.message
            });
            return;
        }
    }
}

module.exports = new IoTPetFeeder()