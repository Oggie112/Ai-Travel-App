import React from 'react';
import './ActivityCard.css';

function ActivityCard({ activity }) {
  return (
    <div className="activity-card">
      <h2>{activity.name}</h2>
      <p>{activity.description}</p>
    </div>
  );
}

export default ActivityCard;
