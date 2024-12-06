const Game = require('../models/game');


exports.createGame = async (req, res) => {
  try {
    const secretNumber = Math.floor(Math.random() * 900000) + 100000;
    const game = new Game({ secretNumber, players: [] });
    await game.save();
    res.status(201).json({ gameId: game._id });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de la partie' });
  }
};


exports.joinGame = async (req, res) => {
  try {
    const { username } = req.body;
    const game = await Game.findById(req.params.id);

    if (!game) return res.status(404).json({ error: 'Partie introuvable' });

    game.players.push({ username });
    await game.save();
    res.status(200).json({ message: `${username} a rejoint la partie` });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la connexion à la partie' });
  }
};


exports.getGameDetails = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ error: 'Partie introuvable' });
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des détails' });
  }
};
