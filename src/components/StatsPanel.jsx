import React from "react";
import '../styles/StatsPanel.css';

function StatsPanel({ players, darkMode }) {
    if (players.length === 0) return null;
    const totalPlayers = players.length;
    const totalGoals = players.reduce((sum, player) => sum + player.goles, 0);
    const avgRating = (players.reduce((sum, player) => sum + player.rating, 0) / totalPlayers).toFixed(2);
    const topScorer = players.reduce((top, player) => (player.goles > top.goles ? player : top), players[0]);

    return (
        React.createElement('div', { className: 'stats-panel ' + (darkMode ? 'stats-panel--dark' : '') },
            React.createElement('h3', null, 'Estadísticas'),
            React.createElement('p', null, 'Total de jugadores: ' + totalPlayers),
            React.createElement('p', null, 'Total de goles: ' + totalGoals),
            React.createElement('p', null, 'Promedio de rating: ' + avgRating),
            React.createElement('p', null, 'Máximo goleador: ' + topScorer.nombre + ' (' + topScorer.goles + ' goles)')
        )
    );
}
export default StatsPanel;
