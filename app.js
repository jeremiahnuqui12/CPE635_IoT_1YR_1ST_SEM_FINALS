const http = require('http');
const express = require('express');
const path = require('path');


const app = express();
const server = http.createServer(app);

// require("./socket_connection")(server);

const general_routes = require('./router/routes');

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine
app.engine('html', (filePath, options, callback) => {
  return callback(null, require('fs').readFileSync(filePath, 'utf-8'));
});
app.use('/assets', express.static(path.join(__dirname, 'assets')));



app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// Mount routes
app.use('/', general_routes);

// Start server
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
