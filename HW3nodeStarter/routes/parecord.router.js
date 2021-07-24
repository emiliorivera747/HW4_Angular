const express = require('express');
const router = express.Router();
const parecordController = require('../controllers/parecord.controller');
const Role = require('../_helpers/role');
const authorize = require('../_helpers/authorize');


//TODO: finish the router. Use the following routes '/addparecord' ,  '/getparecords', and '/:date' for the delete. Hint: the delete must DELETE protocol. How to extract info ('date' in this case) when you receive DELETE requests?



module.exports = router;
