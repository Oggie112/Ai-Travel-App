import React, { useState, useEffect } from 'react';
import UserPreferences from '../services/UserPreferences';
import './Filters.css';

function Filters() {
  const [type, setType] = useState('');
  const [cost, setCost] = useState('');

  useEffect(() => {
    const filters = UserPreferences.getFilters();
    if (filters) {
      setType(filters.type || '');
      setCost(filters.cost || '');
    }
  }, []);

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setType(newType);
    UserPreferences.setFilters({ type: newType, cost });
  };

  const handleCostChange = (e) => {
    const newCost = e.target.value;
    setCost(newCost);
    UserPreferences.setFilters({ type, cost: newCost });
  };

  return (
    <div className="filters">
      <div className="filter-group">
        <label htmlFor="type-select">Activity Type:</label>
        <select id="type-select" value={type} onChange={handleTypeChange}>
          <option value="">--All--</option>
          <option value="hiking">Hiking</option>
          <option value="surfing">Surfing</option>
          <option value="kayaking">Kayaking</option>
          <option value="biking">Biking</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="cost-select">Cost:</label>
        <select id="cost-select" value={cost} onChange={handleCostChange}>
          <option value="">--All--</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
