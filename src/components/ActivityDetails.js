import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ActivityService from '../ActivityService';
import UserPreferences from '../services/UserPreferences';
import './ActivityDetails.css';

function ActivityDetails() {
  const { state } = useLocation();
  const { id } = useParams();
  const [activity, setActivity] = useState(state && state.activity ? state.activity : null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!activity) {
      ActivityService.getActivityDetails(id)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setActivity(data);
          }
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to fetch activity details.");
        });
    }
  }, [id, activity]);

  const handleFavorite = () => {
    if (!activity) return;
    const currentFavorites = UserPreferences.getFavorites();
    const updatedFavorites = [...currentFavorites, activity];
    UserPreferences.setFavorites(updatedFavorites);
    alert(`Added ${activity.name} to favorites.`);
  };

  if (error) {
    return <div>{error}</div>;
  }
  
  if (!activity) {
    return <div>Loading activity details...</div>;
  }

  return (
    <div className="activity-details">
      <h1>{activity.name}</h1>
      <p>{activity.description}</p>
      <p>Destination: {activity.destination}</p>
      <p>Cost: {activity.cost}</p>
      <img src={activity.imageUrl} alt={activity.name} />
      <button onClick={handleFavorite} className="favorite-button">Favorite</button>
    </div>
  );
}

export default ActivityDetails;
