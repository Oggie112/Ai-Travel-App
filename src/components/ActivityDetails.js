import React from 'react';
import './ActivityDetails.css';

function ActivityDetails({ activity }) {
  if (!activity) {
    return <div>No activity details available.</div>;
  }
  return (
    <div className="activity-details">
      <h1>{activity.name}</h1>
      <h2>{activity.type ? `Type: ${activity.type}` : 'Type: Not specified'}</h2>
      <p>Destination: {activity.destination}</p>
    </div>
  );
}

export default ActivityDetails;
