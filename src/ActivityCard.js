import React from 'react';
import './ActivityCard.css';

function ActivityCard({ activity }) {
  return (
    <div className="activity-card">
      <img src={activity.imageUrl} alt={activity.name} className="activity-card-image" />
      <h2>{activity.name}</h2>
      <p>{activity.description}</p>
      <p className="activity-card-destination">{activity.destination}</p>
    </div>
  );
}

export default ActivityCard;
