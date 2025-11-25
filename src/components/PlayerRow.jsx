import React from 'react';
import '../styles/PlayerRow.css';

const PlayerRow = ({ 
  player, 
  onClick, 
  isFavorite, 
  onToggleFavorite, 
  darkMode, 
  colorClass 
}) => {
  
  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Evita que se abra el modal al dar click en la estrella
    onToggleFavorite(player.id);
  };

  return (
    <tr 
      className={`player-row ${colorClass} ${darkMode ? 'player-row--dark' : ''}`}
      onClick={() => onClick(player)}
    >
      <td className="player-row__cell player-row__cell--favorite">
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
          title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </td>
      
      <td className="player-row__cell font-bold">{player.nombre}</td>
      <td className="player-row__cell">{player.club}</td>
      <td className="player-row__cell">{player.posicion}</td>
      <td className="player-row__cell">{player.pais}</td>
      <td className="player-row__cell center">{player.edad}</td>
      <td className="player-row__cell center">{player.goles}</td>
      <td className="player-row__cell center">{player.asistencias}</td>
      <td className="player-row__cell center rating">{player.rating}</td>
    </tr>
  );
};

export default PlayerRow;