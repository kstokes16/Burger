var connection = require('./connection.js');

var orm = {
    selectAll: function (tableInput, cb) {
      connection.query('SELECT * FROM ' + tableInput + ';', function (err, res) {
        if (err) throw err;
        cb(res);
      })
    }
  }

module.exports = orm;
