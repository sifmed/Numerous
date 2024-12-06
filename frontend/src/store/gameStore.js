import { create } from 'zustand';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export const useGameStore = create((set) => ({
  gameId: null,
  username: null,
  leaderboard: [],
  joinGame: (gameId, username) => {
    set({ gameId, username });
    socket.emit('join-game', { gameId, username });
  },
  createGame: async () => {
    const response = await fetch('http://localhost:3000/api/game', {
      method: 'POST',
    });
    const data = await response.json();
    set({ gameId: data.gameId });
    return data.gameId;
  },
  submitGuess: (guess) => {
    const { gameId, username } = useGameStore.getState();
    socket.emit('submit-guess', { gameId, username, guess });
  },
  updateLeaderboard: (leaderboard) => set({ leaderboard }),
}));

socket.on('leaderboard-update', (data) => {
  useGameStore.getState().updateLeaderboard(data);
});
