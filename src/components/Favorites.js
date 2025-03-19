import React, { useState, useEffect } from 'react';
import ActivityCard from '../ActivityCard';
import UserPreferences from '../services/UserPreferences';
import './Favorites.css';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = UserPreferences.getFavorites();
    setFavorites(favs);
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="favorites">
        <h2>No favorites added yet.</h2>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      <div className="favorites-list">
        {favorites.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
