var connection = require('./connection.js');

var orm = {
    selectAll: function(whatToSelect, tableInput) {
      var queryString = "SELECT ?? FROM ??";
      connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(tableInput, colToSearch, valOfCol) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  
      console.log(queryString);
  
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(tableInput,colToSearch,valofCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        console.log(queryString);
        connection.query(queryString, [tableInput, colToSearch, valofCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }}
