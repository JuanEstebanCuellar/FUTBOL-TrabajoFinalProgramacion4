import React from "react";
import '../styles/ControlPanel.css';

function ControlPanel({
    rowColors,
    onRowColorsChange,
    showFavoritesOnly,
    onShowFavoritesOnlyChange,
}) {
    return (
        <div className="control-panel">
            <div className="control-panel__section">
                <label>Colorear filas:</label>
                <select
                    value={rowColors}
                    onChange={(e) => onRowColorsChange(e.target.value)}
                >
                    <option value="ninguno">Ninguno</option>
                    <option value="pares">Pares</option>
                    <option value="impares">Impares</option>
                </select>
            </div>
            <div className="control-panel__section">
                <label>
                    <input
                        type="checkbox"
                        checked={showFavoritesOnly}
                        onChange={(e) => onShowFavoritesOnlyChange(e.target.checked)}
                    />
                    Mostrar solo favoritos
                </label>
            </div>
            <div className="control-panel__section">
                <label>
                </label>
            </div>
        </div>
    );
}
export default ControlPanel;
