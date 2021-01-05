var debug = require('debug')('hello-bb:route')
var express = require('express');
var router = express.Router();


var mysql = require('mysql')

/* GET users listing. */
router.get('/', function(req, res, next) {
  var conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB
  })

  try {
    conn.query('SELECT description from mytable', function (error, results, fields) {
      if (error) {
        res.send('Error executing query to DB, reason: ' + error)
        console.error(error)
        return;
      }
      result = [];

      for (r in results) {
        result.push(results[r].description)
      }

      res.send('Got results: ' + result.join(' '));
    })
  } finally {
    conn.end()
  }
});

module.exports = router;
