import React from 'react';
import PlayerRow from './PlayerRow';
import '../styles/PlayerTable.css';

const PlayerTable = ({ 
  players, 
  onSort, 
  rowColors, 
  favorites, 
  onToggleFavorite, 
  onRowClick,
  darkMode 
}) => {
  
  if (!players || players.length === 0) {
    return <div className="empty-state">No hay jugadores para mostrar</div>;
  }

  const columns = [
    { label: 'JUGADOR', key: 'name' },
    { label: 'CLUB', key: 'club' },
    { label: 'POSICIÓN', key: 'position' },
    { label: 'PAÍS', key: 'country' },
    { label: 'EDAD', key: 'age' },
    { label: 'GOLES', key: 'goals' },
    { label: 'ASIST', key: 'assists' },
    { label: 'RATING', key: 'rating' },
  ];

  return (
    <div className="table-wrapper">
      <table className="player-table">
        <thead>
          <tr>
            <th width="50">FAV</th>
            {columns.map((col) => (
              <th 
                key={col.key} 
                onClick={() => onSort(col.key)} 
                className="sortable"
              >
                {col.label} ↕
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map((player, idx) => {
            // Lógica de coloreo (Pares/Impares)
            let colorClass = '';
            if (rowColors === 'pares' && idx % 2 === 0) colorClass = 'row-highlight';
            if (rowColors === 'impares' && idx % 2 !== 0) colorClass = 'row-highlight';

            return (
              <PlayerRow
                key={player.id}
                player={player}
                isFavorite={favorites.includes(player.id)}
                onToggleFavorite={onToggleFavorite}
                onClick={onRowClick}
                colorClass={colorClass}
                darkMode={darkMode}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
