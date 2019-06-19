var express = require('express');
var router  = express.Router();
const controller = require('./controller');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Entered user middleware.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', controller.getUsers);
router.post('/', controller.insertUser);
router.get('/count', controller.getUserCount);

module.exports = router;