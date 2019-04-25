var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) { 
            callback(res);
        });
    },

    createOne: function(columns, values, callback) {
        orm.createOne("burgers", columns, values, function(res) {
            callback(res);
        });
    },

    updateOne: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;
