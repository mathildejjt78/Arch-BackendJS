const express = require('express');
const router = express.Router();
const pkmController = require('../controllers/pkmController');


// Create new pkm
router.post('/', pkmController.create);
router.get('/', pkmController.findAll);
router.get('/:pkmId', pkmController.findOne);
router.delete('/:pkmId', pkmController.delete);
router.put('/:pkmId', pkmController.update);
router.post('/', pkmController.create);

module.exports = router;
