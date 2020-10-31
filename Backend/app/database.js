const util = require('util');
let mysql = require('mysql');

global.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Binali_123',
    database: 'xunison',
});
connection.connect();
global.query = util.promisify(connection.query).bind(connection);
