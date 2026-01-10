const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'pup_iot_backend'
});

// db.connect((err) => {
//   if (err) {
//     console.error('DB connection error:', err);
//     return;
//   }
//   console.log('MySQL connected');
// });

module.exports = db;
