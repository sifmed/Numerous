import React from 'react';

const CreateGame = () => {
  const handleCreate = () => {
    console.log("Creating new game...");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
      <h2 className="text-2xl font-semibold mb-4 text-center">Créer une Partie</h2>
      <button
        onClick={handleCreate}
        className="w-full py-2 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600 transition duration-200"
      >
        Créer une Nouvelle Partie
      </button>
    </div>
  );
};

export default CreateGame;
