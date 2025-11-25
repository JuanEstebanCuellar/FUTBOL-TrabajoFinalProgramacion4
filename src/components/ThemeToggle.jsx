import React from "react";
import '../styles/ThemeToggle.css';

function ThemeToggle({ darkMode, onToggle }) {
    return (
        <button 
            className="theme-toggle-btn" 
            onClick={() => onToggle(!darkMode)}
            title="Cambiar tema"
        >
            <span className="theme-toggle__icon">
                {darkMode ? '🌙' : '☀️'}
            </span>
            <span className="theme-toggle__text">
                {darkMode ? 'Modo Oscuro' : 'Modo Claro'}
            </span>
        </button>
    );
}

export default ThemeToggle;