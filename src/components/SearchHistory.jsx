import React from 'react';
import '../styles/SearchHistory.css';

function SearchHistory({ searchHistory, onSelectHistory, onClear }) {
  if (!searchHistory || searchHistory.length === 0) return null;

  const handleClear = () => {
    if (onClear) {
      onClear();
    }
  };

  return (
    <div className="search-history">
      <p className="search-history-label">Historial:</p>
      <div className="search-history-list">
        {searchHistory.map((term, idx) => (
          <button
            key={idx}
            onClick={() => onSelectHistory(term)}
            className="search-history-item"
          >
            {term}
          </button>
        ))}
      </div>
      <button onClick={handleClear} className="search-history-clear">Limpiar</button>
    </div>
  );
}

export default SearchHistory;
