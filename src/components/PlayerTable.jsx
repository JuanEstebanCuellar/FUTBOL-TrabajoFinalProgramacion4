import React from 'react';
import PlayerRow from './PlayerRow'; // Importamos el componente hijo
import '../styles/PlayerTable.css';

const PlayerTable = ({ 
  players, 
  onSort, 
  rowColors, 
  favorites, 
  onToggleFavorite, 
  onRowClick,
  darkMode // Agregamos darkMode si lo necesitas pasar
}) => {
  
  if (!players || players.length === 0) {
    return <div className="player-table-empty">No hay jugadores para mostrar</div>;
  }

  // Definimos las columnas: Label (lo que se ve) vs Key (la propiedad en el JSON)
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
    <div className="player-table-container">
      <table className="player-table">
        <thead>
          <tr>
            <th data-index="0">FAV</th>
            {columns.map((col, idx) => (
              <th 
                key={col.key} 
                onClick={() => onSort(col.key)} 
                className="sortable" 
                data-index={String(idx + 1)}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map((player, idx) => {
            // Lógica de coloreo (Pares/Impares)
            let colorClass = '';
            if (rowColors === 'pares' && idx % 2 === 0) colorClass = 'row-colored';
            if (rowColors === 'impares' && idx % 2 !== 0) colorClass = 'row-colored';

            return (
              <PlayerRow
                key={player.id}
                player={player}
                index={idx}
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