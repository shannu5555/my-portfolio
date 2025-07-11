import React, { useEffect, useState } from "react";

const TeamTable = ({ teamName, teamColor }) => {
  // Retrieve players from localStorage or set an empty array
  const [players, setPlayers] = useState(() => {
    const savedPlayers = localStorage.getItem(teamName);
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });

  // Save players to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem(teamName, JSON.stringify(players));
  }, [players, teamName]);

  // Sort players by position
  const sortedPlayers = [...players].sort((a, b) => a.position - b.position);

  // Assign classes based on team color
  const getTableClass = () => {
    switch (teamColor) {
      case "red": return "table-red";
      case "yellow": return "table-yellow";
      case "darkblue": return "table-darkblue";
      case "orange": return "table-orange";
      case "gold": return "table-gold";
      case "pink": return "table-pink";
      case "lightblue": return "table-lightblue";
      case "violet": return "table-violet";
      default: return "";
    }
  };

  // Delete player function
  const handleDelete = (id) => {
    const updatedPlayers = players.filter(player => player.id !== id);
    setPlayers(updatedPlayers);
  };

  return (
    <div className="team-table">
      <h2>{teamName} Team</h2>
      <table className={getTableClass()}>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Player Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player) => (
            <tr key={player.id}>
              <td>{player.position}</td>
              <td>{player.name}</td>
              <td>
                <button onClick={() => handleDelete(player.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;
