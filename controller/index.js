const db = require('./../model/index');
const socket = require("./../socket-client");
const FAN_ID = 1;
const serialportgsm = require('serialport-gsm');
class IoTPetFeeder {
    constructor() {
        
    }
    index(req, res) {
        res.render('index', { title: 'Dashboard' });
        return;
    }
    async manualFanTrigger(req,res) {
        let fan_status_result = await db.getCurrentFanStatus(FAN_ID);
        // res.status(200).json(fan_status_result);
        // return;
        if (fan_status_result.length) {
            let fan_status = fan_status_result[0];
            if (fan_status.is_fan_on == '1') {
                socket.emit("fan_status", 0);
                await db.saveFanLogs(FAN_ID, 0, 1);
            } else {
                socket.emit("fan_status", 1);
                await db.saveFanLogs(FAN_ID, 1, 1);
            }
        } else {
            socket.emit("fan_status", 1);
            await db.saveFanLogs(FAN_ID, 1, 1);
        }

        // socket.emit("fan_status", 1);
        
        res.status(400).json({ 
            status: "SUCCESS",
            description: "Manual fan trigger"
        });
        return;
    }
    manualFeeder(req,res) {

        return;
    }
    async saveTemperature(req, res) {
        const { room_id, tempValue } = req.body;
        if (!room_id || !tempValue) {
            return res.status(400).json({ 
                status: "ERROR",
                description: "Temperature is required"
            });
        }
        console.log("/api/saveTemperature >>>>", req.body);
        
        try {
            let getCurrentTemperature = await db.getLastRoomTemperature(room_id);
            let is_temp_same = false;
            if (getCurrentTemperature.length) {
                if (tempValue == getCurrentTemperature[0]["temperature"]) {
                    await db.updateTemperatureTimestamp(getCurrentTemperature[0]["id"])
                    is_temp_same = true;
                }
            }

            let fan_status_result = await db.getCurrentFanStatus(FAN_ID);
            let is_manual_trigger = false;
            let is_open = false;
            let MAX_TEMP = 25; // DEFAULT
            let temp_config = await db.getTemperatureConfig(1);
            if (temp_config.length) {
                MAX_TEMP = temp_config[0].temperature;
            }
            if (fan_status_result.length) {
                is_manual_trigger = fan_status_result[0].is_manual_trigger == "1";
                is_open = fan_status_result[0].is_fan_on == "1";
            }
            if (tempValue >= MAX_TEMP && !is_open) {
                // START FAN
                socket.emit("fan_status", 1)
                await db.saveFanLogs(FAN_ID, 1, 0);
            } else if (tempValue <= 25 && is_open && !(is_manual_trigger && is_open)) {
                // CLOSES FAN
                socket.emit("fan_status", 0)
                await db.saveFanLogs(FAN_ID, 0, 0);
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
        return;
    }
    async getCurrentRoomTemperature(req, res) {
        let result = await db.getLastRoomTemperature(1);
        res.status(200).json(result);
        return;
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
        return;
    } 
    // ================================================================
    // ================================================================
    // ================================================================
    async getFeedingTime(req, res) {
        let result = await db.getFeedingTime();
        res.status(200).json(result);
        return;
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
    // ================================================================
    // ================================================================
    // ================================================================
    async getMobileNumber(req, res) {
        let result = await db.getMobileNumber();
        res.status(200).json(result);
        return;
    }
    async saveMobileNumber(req, res) {
        const { mobile_numbers } = req.body;
        let mobile_number_list = JSON.parse(mobile_numbers);
        if (!mobile_number_list || !Array.isArray(mobile_number_list)) {
            res.status(400).json({ 
                status: "ERROR",
                description: "Mobile Number is required"
            });
            return;
        }
        try {
            let db_payload = [];
            mobile_number_list.map(x=>{
                db_payload.push(
                    [x]
                );
            });
            // console.log(db_payload);
            await db.removeMobileNumber()
            await db.saveMobileNumber(db_payload);
            res.status(200).json({
                status: "SUCCESS",
                description: "Mobile Number has been saved"
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
    async removeMobileNumber(req,res) {
        const { mobile_number_id } = req.body;
        if (!mobile_number_id) {
            res.status(400).json({ 
                status: "ERROR",
                description: "Mobile number id is required"
            });
            return;
        }
        try {
            let db_payload = [];
            await db.removeMobileNumberRecord(mobile_number_id)
            res.status(200).json({
                status: "SUCCESS",
                description: "Mobile number has been removed"
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
    // ================================================================
    // ================================================================
    // ================================================================
    async getTemperatureLogs(req, res) {
        let result = await db.getTemperatureHistory();
        res.status(200).json(result);
        return;
    }
    async getFanLogs(req, res) {
        let result = await db.getFanLogs();
        res.status(200).json(result);
        return;
    }
    async getPetFeederLogs(req, res) {
        let result = await db.getPetFeederHistory();
        res.status(200).json(result);
        return;
    }
    async getSMSNotificationLogs(req, res) {
        let result = await db.getSMSNotificationLogs();
        res.status(200).json(result);
        return;
    }

    async savePetFeederLogs() {
        db.savePetFeederHistory("SUCCESS")
    }

    async sendSMSMessage(sms_message) {
        const GSM_SERIALPORT = "/dev/ttyUSB0";
        let modem = serialportgsm.Modem()

        let options = {
            baudRate: 115200,
            dataBits: 8,
            stopBits: 1,
            parity: 'none',
            rtscts: false,
            xon: false,
            xoff: false,
            xany: false,
            autoDeleteOnReceive: true,
            enableConcatenation: true,
            incomingCallIndication: true,
            incomingSMSIndication: true,
            pin: '',
            customInitCommand: '',
            cnmiCommand: 'AT+CNMI=2,1,0,2,1',
            logger: console
        }
        let mobile_number_list = await db.getMobileNumber();
        modem.open('', options, (x)=>{
            console.log("OPEN>>>", x);

            mobile_number_list.map(m_number_list => {
                modem.sendSMS(m_number_list.mobile_number, sms_message, false, (send_sms_res)=>{
                    console.log("sendSMS>>>>", send_sms_res);
                    if (send_sms_res.data.response == "Message Successfully Sent") {
                        saveSMSNotificationLogs(m_number_list.mobile_number, sms_message, "SUCCESS");
                        modem.close()      
                    } else {
                        saveSMSNotificationLogs(m_number_list.mobile_number, sms_message, "FAILED");
                    }
                    
                })
            })
        })
    }
}

module.exports = new IoTPetFeeder()