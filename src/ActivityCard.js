import React from 'react';
import { Link } from 'react-router-dom';
import './ActivityCard.css';

function ActivityCard({ activity }) {
  return (
    <Link to={`/activity/${activity.id}`} state={{ activity }} className="activity-card-link">
      <div className="activity-card">
        <img src={activity.imageUrl} alt={activity.name} className="activity-card-image" />
        <h2>{activity.name}</h2>
        <p>{activity.description}</p>
        <p className="activity-card-destination">{activity.destination}</p>
      </div>
    </Link>
  );
}

export default ActivityCard;
