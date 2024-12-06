import React, { useState } from 'react';

const JoinGame = () => {
  const [gameId, setGameId] = useState('');
  const [username, setUsername] = useState('');

  const handleJoin = () => {
    console.log("Game ID:", gameId);
    console.log("Username:", username);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
      <h2 className="text-2xl font-semibold mb-4 text-center">Rejoindre une Partie</h2>
      <input
        type="text"
        placeholder="ID de la partie"
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={gameId}
        onChange={(e) => setGameId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={handleJoin}
        className="w-full py-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-200"
      >
        Rejoindre la Partie
      </button>
    </div>
  );
};

export default JoinGame;

