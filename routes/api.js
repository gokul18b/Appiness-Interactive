var express = require('express');
var router = express.Router();
var knex = require('../config');

/* Add User. */
router.post('/add-user', function (req, response, next) {

    knex.from('users').select("*").then(function (rows) {
        //check thw row count if data exist or not whether not exit the role is an admin
        var user_role = rows.length == 0 ? 'Admin' : 'Student';
        //insertion process
        knex('users').insert({user_role: user_role,name:req.body.name}).then(function (req) {
            response.send("Sucessfully Added");
        });
    });
});

/* listout the register users */
router.get('/list-users', function (req, response, next) {
    //selection process
    knex.from('users').select("*").then(function (rows) {
        response.send(rows)
    });
});

module.exports = router;
