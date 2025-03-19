import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActivityService from '../ActivityService';
import UserPreferences from '../services/UserPreferences';
import './ActivityDetails.css';

function ActivityDetails() {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, [id]);

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
      <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="booking-link">
        Book Now
      </a>
      <img src={activity.imageUrl} alt={activity.name} />
      <button onClick={handleFavorite} className="favorite-button">Favorite</button>
    </div>
  );
}

export default ActivityDetails;
