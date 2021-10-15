const express = require('express');
const vehiclesController = require('../controllers/vehicles.controller');
const checkAuthMiddleware = require('../middleware/check.auth')

const router = express.Router();

router.post("/", checkAuthMiddleware.checkAuth, vehiclesController.save);
router.get("/:id", vehiclesController.show);
router.get("/", vehiclesController.showAll);
router.patch("/:id",checkAuthMiddleware.checkAuth, vehiclesController.update);
router.delete("/:id",checkAuthMiddleware.checkAuth, vehiclesController.destroy);

module.exports = router;
