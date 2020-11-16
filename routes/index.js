var express = require('express');
var router = express.Router();


var mysql = require('mysql')
var conn = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PW || '',
  database: process.env.DB || 'mydb'
})
conn.connect()

/* GET users listing. */
router.get('/', function(req, res, next) {
  conn.query('SELECT description from mytable', function(error, results, fields) {
    if (error) throw error;
    result = [];

    for(r in results) {
      result.push(results[r].description)
    }

    res.send('Got results: ' + result.join(' '));
  })
});

module.exports = router;
