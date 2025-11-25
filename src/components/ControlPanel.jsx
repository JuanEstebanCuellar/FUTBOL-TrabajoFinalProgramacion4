import React from 'react';
import '../styles/ControlPanel.css';

const ControlPanel = ({ rowColors, setRowColors }) => {
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
      
    </div>
  );
};

export default ControlPanel;
