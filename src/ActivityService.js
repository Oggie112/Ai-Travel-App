import axios from 'axios';

const activities = [
  {
    id: 1,
    name: "Hiking Adventure",
    description: "Explore scenic hiking trails and enjoy breathtaking views.",
    type: "hiking",
    destination: "Rocky Mountains",
    cost: "low",
    imageUrl: "https://example.com/hiking.jpg"
  },
  {
    id: 2,
    name: "Kayaking Journey",
    description: "Enjoy serene kayaking on calm waters while experiencing nature up close.",
    type: "kayaking",
    destination: "Lake Tahoe",
    cost: "medium",
    imageUrl: "https://example.com/kayaking.jpg"
  },
  {
    id: 3,
    name: "Mountain Biking",
    description: "Experience thrilling mountain biking adventures on rugged terrain.",
    type: "biking",
    destination: "Alpine Valley",
    cost: "high",
    imageUrl: "https://example.com/mountain_biking.jpg"
  }
];

export function getActivities() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(activities);
    }, 500); // simulate network delay
  });
}

export function getFilteredActivities(filters) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = activities;
      if (filters.type) {
        filtered = filtered.filter(activity => activity.type === filters.type);
      }
      if (filters.cost) {
        filtered = filtered.filter(activity => activity.cost === filters.cost);
      }
      resolve(filtered);
    }, 500); // simulate network delay
  });
}

export function getPosts() {
  return axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      console.log("Axios GET posts response:", response.data);
      return response.data;
    })
    .catch(error => {
      console.error("Axios GET posts error:", error);
      return { error: "Failed to fetch posts" };
    });
}

export default {
  getActivities,
  getFilteredActivities,
  getPosts
};

// Sample test: calling getFilteredActivities with sample filters and logging the result.
getFilteredActivities({ type: 'hiking', cost: 'low' }).then(filteredActivities => {
  console.log('Filtered activities for type "hiking" and cost "low":', filteredActivities);
});

// Test Axios GET request
getPosts();
