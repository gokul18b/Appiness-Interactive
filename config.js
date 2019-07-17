/**
 * Created by gokul on 05-10-2017.
 */
const config = require('./db');
module.exports=require('knex')(config['DB']);