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
}

module.exports = new iot_web_based();