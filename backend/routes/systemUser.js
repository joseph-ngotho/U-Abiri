const express = require('express');
const systemUserController = require('../controllers/systemUser.controller');

const router = express.Router();

router.post('/sign-up', systemUserController.signUp);
router.post('/login', systemUserController.login);

module.exports = router;