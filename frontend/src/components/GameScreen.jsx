import React, { useState } from "react";

const GameScreen = () => {
  const [guess, setGuess] = useState("");

  const handleSubmitGuess = () => {
    console.log("Submitted guess:", guess);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
      <h2 className="text-2xl font-semibold mb-4 text-center">Devinez le Nombre !</h2>
      <input
        type="number"
        placeholder="Entrez votre devinette"
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button
        onClick={handleSubmitGuess}
        className="w-full py-2 bg-orange-500 rounded-lg text-white font-semibold hover:bg-orange-600 transition duration-200"
      >
        Soumettre
      </button>
    </div>
  );
};

export default GameScreen;
