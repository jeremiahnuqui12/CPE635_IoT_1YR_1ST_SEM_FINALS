const pool = require("./../model/config");
class iot_web_based {

    async getLastRoomTemperature(room_id) {
        const [rows] = await pool.query("SELECT * FROM room_temperature_records WHERE room_id=? ORDER BY id DESC LIMIT 1", [room_id]);
        return rows;
    }
    async saveTemperature (room_id, tempValue) {
        await pool.query(
            "INSERT INTO room_temperature_records (room_id, temperature) VALUES (?, ?)",
            [room_id, tempValue]
        );
    }
    async updateTemperatureTimestamp (room_temperature_record_id) {
        await pool.query(
            "UPDATE room_temperature_records SET last_timestamp_checked=NOW() WHERE id=?",
            [room_temperature_record_id]
        );
    }
    async saveTemperatureSettings(temp_value) {
        await pool.query(
            "INSERT INTO temperature_settings (temperature) VALUES (?)",
            [temp_value]
        );
    }
    async removeTemperatureSettings () {
        await pool.query("UPDATE temperature_settings SET status=0 WHERE status=1");
    }
    async getTemperatureConfig() {
        const [rows] = await pool.query("SELECT * FROM temperature_settings WHERE status=1 ORDER BY id DESC LIMIT 1");
        return rows;
    }
    // ================================================
    // ================================================
    // ================================================
    async saveFeedingTimes(payload) {
        await pool.query(
            "INSERT INTO pet_feeding_time_settings (time) VALUES ?",
            [payload]
        );
    }
    async removeFeedingTime () {
        await pool.query("UPDATE pet_feeding_time_settings SET status=0 WHERE status=1");
    }
    async removeFeedingTimeRecord(feeding_time_id) {
        await pool.query("UPDATE pet_feeding_time_settings SET status=0 WHERE id=?", [feeding_time_id]);
    }
    async getFeedingTime() {
        const [rows] = await pool.query("SELECT * FROM pet_feeding_time_settings WHERE status=1 ORDER BY id ASC");
        return rows;
    }
    // ================================================
    // ================================================
    // ================================================
    async saveMobileNumber(payload) {
        await pool.query(
            "INSERT INTO sms_mobile_number_records (mobile_number) VALUES ?",
            [payload]
        );
    }
    async removeMobileNumber () {
        await pool.query("UPDATE sms_mobile_number_records SET status=0 WHERE status=1");
    }
    async removeMobileNumberRecord(mobile_number_record_id) {
        await pool.query("UPDATE sms_mobile_number_records SET status=0 WHERE id=?", [mobile_number_record_id]);
    }
    async getMobileNumber() {
        const [rows] = await pool.query("SELECT * FROM sms_mobile_number_records WHERE status=1 ORDER BY id ASC");
        return rows;
    }
    // ================================================
    // ================================================
    // ================================================
    async saveFanLogs(fan_id, is_fan_on, is_manual_trigger) {
        await pool.query(
            "INSERT INTO fan_logs (fan_id, is_fan_on, is_manual_trigger) VALUES (?, ?, ?)",
            [fan_id, is_fan_on, is_manual_trigger]
        );
    }
    async getCurrentFanStatus(fan_id) {
        const [rows] = await pool.query("SELECT * FROM fan_logs WHERE fan_id=? ORDER BY id DESC LIMIT 1", [fan_id]);
        return rows;
    }
    // ================================================
    // ================================================
    // ================================================
    async getTemperatureHistory(room_id) {
        const [rows] = await pool.query("SELECT * FROM room_temperature_records ORDER BY id DESC LIMIT 10");
        return rows;
    }
    async getPetFeederHistory() {
        const [rows] = await pool.query("SELECT * FROM pet_feeder_logs ORDER BY id DESC LIMIT 10");
        return rows;
    }
    async getSMSNotificationLogs() {
        const [rows] = await pool.query("SELECT * FROM sms_notification_logs ORDER BY id DESC LIMIT 10");
        return rows;
    }
    async getFanLogs() {
        const [rows] = await pool.query("SELECT * FROM fan_logs ORDER BY id DESC LIMIT 10");
        return rows;
    }

    async savePetFeederHistory(status, is_manual_trigger) {
        await pool.query(
            "INSERT INTO pet_feeder_logs (status, is_manual_trigger) VALUES (?, ?)",
            [status, is_manual_trigger]
        );
    }
    async saveSMSNotificationLogs(receiver, message, status) {
        await pool.query(
            "INSERT INTO sms_notification_logs (receiver_number, message, status) VALUES (?,?,?)",
            [receiver, message, status]
        );
    }
}

module.exports = new iot_web_based();