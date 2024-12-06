const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  username: String,
  score: { type: Number, default: 0 },
  team: { type: String, default: null },
});

const GameSchema = new mongoose.Schema({
  secretNumber: Number,
  players: [PlayerSchema],
  leaderboard: [{ username: String, score: Number }],
});

module.exports = mongoose.model('Game', GameSchema);
