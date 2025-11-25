import React from "react";
import '../styles/ThemeToggle.css';

function ThemeToggle({ darkMode, onToggle }) {
    return (
        <div className="theme-toggle">
            <label className="theme-toggle__label">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={(e) => onToggle(e.target.checked)}
                />
                <span className="theme-toggle__slider"></span>
            </label>
            <span className="theme-toggle__text">{darkMode ? 'Modo Oscuro' : 'Modo Claro'}</span>
        </div>
    );
}
export default ThemeToggle;