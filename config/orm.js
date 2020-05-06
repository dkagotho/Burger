var connection = require('../config/connection.js');

// Inside the `orm.js` file create the code that will execute MySQL commands
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === 'string' && value.indexOf('') >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + '=' + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}
//create, read, update, delete
var orm = {
  insert: function(some_tbl, some_col, some_val, cb){
    connection.query('INSERT INTO ' + some_tbl + ' ( ' + some_col + ' ) ' + ' VALUES (?)', [some_val], function(err, result){
      cb(result);
    });
  },
  read: function(some_tbl, cb){
    connection.query('SELECT *  FROM ' + some_tbl + ';', function(err, result){
      cb(result);
    });
  },
  update: function(some_tbl, some_set_col, some_set_val, some_col_param, some_val_param, cb){
    connection.query('UPDATE ' + some_tbl + ' SET ' + some_set_col + ' = ? WHERE ' + some_col_param + ' = ?', [some_set_val, some_val_param], function(err, result){
      cb(result);
    });
  },
  delete: function(some_tbl, some_col, some_val, cb){
    connection.query('DELETE FROM ' + some_tbl + ' WHERE ' + some_col + ' = ?',[some_val], function(err, result){
      cb(result);
    });
  }
}

module.exports = orm;