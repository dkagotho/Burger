var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bdba2fb43b77d2',
    password: 'eb686ca7',
    database: 'heroku_1c6026c6e95e96b'
  });
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    
});

module.exports = connection;