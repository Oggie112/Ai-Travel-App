import React from 'react';
import { useLocation } from 'react-router-dom';
import './ActivityDetails.css';

function ActivityDetails() {
  const { state } = useLocation();
  const activity = state && state.activity;

  if (!activity) {
    return <div>No activity details available.</div>;
  }
  return (
    <div className="activity-details">
      <h1>{activity.name}</h1>
      <p>{activity.description}</p>
      <p>Destination: {activity.destination}</p>
      <img src={activity.imageUrl} alt={activity.name} />
    </div>
  );
}

export default ActivityDetails;
