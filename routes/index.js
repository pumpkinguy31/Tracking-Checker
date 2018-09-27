const express = require('express');
const router = express.Router();
const routeController = require('../controllers/RouteController');
const trackingController = require('../controllers/TrackingController');

// ? PAGE ROUTES
router.get('/', routeController.renderHomePage);
// ? CHECK TRACKING ROUTES
router.get('/test', trackingController.testController);

module.exports = router;
