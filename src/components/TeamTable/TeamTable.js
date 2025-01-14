import React from "react";

const TeamTable = ({ teamName, players, teamColor }) => {
  // Sort players by position in ascending order
  const sortedPlayers = [...players].sort((a, b) => a.position - b.position);

  

  const getTableClass = () => {
    console.log('Team Color:', teamColor); // Debugging
    switch (teamColor) {
      case 'red':
        return 'table-red';
      case 'blue':
        return 'table-blue';
      case 'yellow':
        return 'table-yellow';
      case 'black':
        return 'table-black';
      // Add more cases for other colors
      default:
        return '';
    }
  };
  


  return (
    <div className="team-table">
      <h2>{teamName} Team</h2>
      <table  className={getTableClass()}>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Player Name</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player) => (
            <tr key={player.id}>
              <td>{player.position}</td>
              <td>{player.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;
