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
      
      {/* CORRECCIÓN CRÍTICA: Propiedades en Inglés para coincidir con players.js */}
      <td className="player-row__cell font-bold">{player.name}</td>
      <td className="player-row__cell">{player.club}</td>
      <td className="player-row__cell">{player.position}</td>
      <td className="player-row__cell">{player.country}</td>
      <td className="player-row__cell center">{player.age}</td>
      <td className="player-row__cell center">{player.goals}</td>
      <td className="player-row__cell center">{player.assists}</td>
      <td className="player-row__cell center rating">{player.rating}</td>
    </tr>
  );
};

export default PlayerRow;