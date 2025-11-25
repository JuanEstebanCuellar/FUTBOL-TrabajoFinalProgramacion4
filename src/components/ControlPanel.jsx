import React from 'react';
import '../styles/ControlPanel.css';

const ControlPanel = ({ rowColors, setRowColors, showOnlyFavorites, setShowOnlyFavorites }) => {
  return (
    <div className="control-bar">
      <div className="control-left">
        <button 
          className={`btn-pill ${rowColors === 'pares' ? 'active' : ''}`}
          onClick={() => setRowColors(rowColors === 'pares' ? 'none' : 'pares')}
        >
          Pintar filas pares
        </button>
        <button 
          className={`btn-pill ${rowColors === 'impares' ? 'active' : ''}`}
          onClick={() => setRowColors(rowColors === 'impares' ? 'none' : 'impares')}
        >
          Pintar filas impares
        </button>
        <button 
          className="btn-pill outline"
          onClick={() => setRowColors('none')}
        >
          Limpiar color
        </button>
      </div>

      <div className="control-right">
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            checked={showOnlyFavorites}
            onChange={() => setShowOnlyFavorites(!showOnlyFavorites)}
          />
          Mostrar solo favoritos
        </label>
      </div>
    </div>
  );
};

export default ControlPanel;