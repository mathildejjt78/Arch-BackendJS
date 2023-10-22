const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// Create new user
router.post('/', userController.create);
router.get('/', userController.findAll);
router.get('/:userId', userController.findOne);
router.delete('/:userId', userController.delete);
router.put('/:userId', userController.update);

module.exports = router;
