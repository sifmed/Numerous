const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/game', gameController.createGame);
router.post('/game/:id/join', gameController.joinGame);
router.get('/game/:id', gameController.getGameDetails);

module.exports = router;
