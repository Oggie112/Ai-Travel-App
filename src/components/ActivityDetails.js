import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import UserPreferences from '../services/UserPreferences';
import './ActivityDetails.css';

function ActivityDetails() {
  const { state } = useLocation();
  const { id } = useParams();
  const activity = state && state.activity;

  const handleFavorite = () => {
    if (!activity) return;
    const currentFavorites = UserPreferences.getFavorites();
    const updatedFavorites = [...currentFavorites, activity];
    UserPreferences.setFavorites(updatedFavorites);
    alert(`Added ${activity.name} to favorites.`);
  };

  if (!activity) {
    return <div>No activity details available for activity id: {id}</div>;
  }
  return (
    <div className="activity-details">
      <h1>{activity.name}</h1>
      <p>{activity.description}</p>
      <p>Destination: {activity.destination}</p>
      <img src={activity.imageUrl} alt={activity.name} />
      <button onClick={handleFavorite} className="favorite-button">Favorite</button>
    </div>
  );
}

export default ActivityDetails;
