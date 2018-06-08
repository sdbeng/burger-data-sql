/* create the code that will call the ORM functions using burger specific input for the ORM. */

var orm = require("../config/orm.js");

var burger = {
    selectAll:(cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res)
        })
    },
}

module.exports = burger;