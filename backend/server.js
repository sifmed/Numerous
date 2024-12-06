require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const gameRoutes = require('./routes/gameRoutes');


const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/numerous';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch((err) => console.error('Erreur MongoDB:', err));


app.use(cors());
app.use(express.json());


app.use('/api', gameRoutes);


io.on('connection', (socket) => {
  console.log('Utilisateur connecté:', socket.id);

  socket.on('join-game', ({ gameId, username }) => {
    socket.join(gameId);
    io.to(gameId).emit('message', `${username} a rejoint la partie`);
  });

  socket.on('submit-guess', async ({ gameId, username, guess }) => {
    const game = await Game.findById(gameId);
    if (!game) return;

    const difference = Math.abs(game.secretNumber - guess);
    const player = game.players.find((p) => p.username === username);

    if (player) {
      player.score += (difference === 0) ? 10 : (100 - difference / 100);
      game.leaderboard = game.players.map((p) => ({
        username: p.username,
        score: p.score,
      }));
      game.leaderboard.sort((a, b) => b.score - a.score);
      await game.save();

      io.to(gameId).emit('leaderboard-update', game.leaderboard);
    }
  });

  socket.on('disconnect', () => {
    console.log('Utilisateur déconnecté:', socket.id);
  });
});


server.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));
