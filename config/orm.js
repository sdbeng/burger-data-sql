// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

var connection = require("./connection.js");

/* create the methods:
     * `selectAll()`
     * `insertOne()`
     * `updateOne()`
*/
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  function objToSql(ob) {
    // column1=value, column2=value2,...
    var arr = [];
  
    for (var key in ob) {
      arr.push(key + "=" + ob[key]);
    }
  
    return arr.toString();
  }

  var orm = {
    // define selectAll
    selectAll:function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        // call query
        connection.query(queryString, (err, result) => {
            if(err){
                throw err;
            }
            cb(result)
        })
    },

  }

  module.exports = orm;