.pagination {
  background: white;
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.pagination-controls {
  display: flex;
  gap: 0.8rem;
  align-items: center;
}

.pagination-controls button {
  background: var(--dark-gray);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.pagination-controls button:hover:not(:disabled) {
  background: var(--primary-orange);
  transform: translateY(-2px);
}

.pagination-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-info {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.9rem;
}

.pagination-settings {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.pagination-settings select {
  padding: 0.5rem 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  color: var(--text-dark);
  cursor: pointer;
  font-weight: 600;
}

.pagination-settings select:focus {
  outline: none;
  border-color: var(--primary-orange);
}

@media (max-width: 768px) {
  .pagination {
    flex-direction: column;
    align-items: stretch;
  }
  .pagination-controls {
    justify-content: center;
  }
}
