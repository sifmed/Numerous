import React from "react";

const Leaderboard = () => {
  const leaderboard = [
    { username: "JaneDoe", score: 75 },
    { username: "JohnDoe", score: 50 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
      <h2 className="text-2xl font-semibold mb-4 text-center">Leaderboard</h2>
      <div className="space-y-2">
        {leaderboard.map((player, index) => (
          <div
            key={index}
            className="flex justify-between text-lg font-medium"
          >
            <span>{player.username}</span>
            <span>{player.score} points</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
