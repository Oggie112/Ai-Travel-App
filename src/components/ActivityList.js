import React, { useState, useEffect, useCallback } from 'react';
import ActivityCard from '../ActivityCard';
import ActivityService from '../ActivityService';
import UserPreferences from '../services/UserPreferences';

function ActivityList() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(UserPreferences.getFilters());

  const fetchActivities = useCallback(() => {
    ActivityService.getFilteredActivities(filters)
      .then((data) => {
        // Limit the list to 5 activities if more are returned
        setActivities(data.slice(0, 5));
      })
      .catch((err) => {
        console.error(err);
        setError("Oops, something went wrong.");
      });
  }, [filters]);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  useEffect(() => {
    const handleFiltersChanged = () => {
      const newFilters = UserPreferences.getFilters();
      setFilters(newFilters);
    };
    window.addEventListener("filtersChanged", handleFiltersChanged);
    return () => {
      window.removeEventListener("filtersChanged", handleFiltersChanged);
    };
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (activities.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', fontSize: '1.2em' }}>
        No activities match your filters.
      </div>
    );
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
