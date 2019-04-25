var connection = require("../config/connection.js");

function convertToSql(obj) {
    var array = [];

    for (var key in obj) {
        var value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }
    }

    return array.toString();
}

var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    },
    insertOne: function(table, columns, values, callback) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (?, ?, ?)";

        console.log(queryString);

        connection.query(queryString, values, function(err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    },

    updateOne: function(table, objColVals, condition, callback) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += convertToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    }
};

module.exports = orm;