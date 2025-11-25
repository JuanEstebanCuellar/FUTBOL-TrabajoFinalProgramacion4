import React from 'react';
import '../styles/StatsPanel.css';

const StatsPanel = ({ stats, favoritesCount }) => {
  if (!stats) return null;

  return (
    <div className="stats-dashboard">
      {/* Tarjeta 1: Principal Amarilla */}
      <div className="stat-card stat-card--primary">
        <span className="stat-label-dark">JUGADORES EN TABLA</span>
        <div className="stat-value-big">{stats.total}</div>
        <div className="stat-pill">Favoritos: {favoritesCount}</div>
      </div>

      {/* Tarjeta 2: Promedio Edad */}
      <div className="stat-card stat-card--dark">
        <span className="stat-label">PROMEDIO DE EDAD</span>
        <div className="stat-value">{stats.avgAge} <span className="unit">años</span></div>
      </div>

      {/* Tarjeta 3: Promedio Goles */}
      <div className="stat-card stat-card--dark">
        <span className="stat-label">PROMEDIO DE GOLES</span>
        <div className="stat-value">{stats.avgGoles}</div>
      </div>

      {/* Tarjeta 4: Goleador */}
      <div className="stat-card stat-card--dark">
        <span className="stat-label">MÁXIMO GOLEADOR</span>
        <div className="stat-scorer-name">{stats.topScorer?.name || '-'}</div>
        <div className="stat-scorer-goals">{stats.topScorer?.goals || 0} goles</div>
      </div>
    </div>
  );
};

export default StatsPanel;
