import React, { useState, useEffect } from 'react';
import ActivityCard from '../ActivityCard';
import ActivityService from '../ActivityService';

function ActivityList() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    ActivityService.getActivities()
      .then((data) => {
        // Limit the list to 5 activities if more are returned
        setActivities(data.slice(0, 5));
      })
      .catch((err) => {
        console.error(err);
        setError("Oops, something went wrong.");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="activity-list">
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
}

export default ActivityList;
