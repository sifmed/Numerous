import React from "react";
import JoinGame from "./components/JoinGame";
import CreateGame from "./components/CreateGame";
import GameScreen from "./components/GameScreen";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 text-white">
      <div className="container mx-auto p-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-wider">Numerous Game</h1>
          <p className="mt-2 text-xl">Devinez le nombre et soyez le meilleur !</p>
        </header>
        
        <div className="flex flex-col items-center space-y-6">
          <CreateGame />
          <JoinGame />
          <GameScreen />
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}

export default App;
