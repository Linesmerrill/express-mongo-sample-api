const express = require('express');
const router = express.Router();

const releasesRoutes = require('./releases');

router.use('/releases', releasesRoutes); 

module.exports = router;