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

export async function getRandomActivities() {
  try {
    const response = await axios.get('https://api.mocki.io/v2/12345');
    const data = response.data;
    
    // Check if the response contains an error message
    if (data.name === "SUBSCRIPTION_REQUIRED") {
      console.error("API error:", data.message);
      return [];
    }

    // Assuming the API returns an array of activities, map the data to our expected format.
    const mappedActivities = data.map((activity, index) => ({
      id: activity.id || index + 1,
      name: activity.name || "Unknown Activity",
      description: activity.description || "",
      type: activity.type || "unknown",
      destination: activity.destination || "unknown",
      cost: activity.cost || "unknown",
      imageUrl: activity.imageUrl || "https://example.com/default.jpg"
    }));
    return mappedActivities;
  } catch (error) {
    console.error("Axios GET random activities error:", error);
    return [];
  }
}

export async function getActivityDetails(id) {
  try {
    const response = await axios.get(`https://api.mocki.io/v2/${id}`);
    const data = response.data;
    const details = {
      id: data.id || id,
      name: data.name || "Unknown Activity",
      description: data.description || "No description available.",
      type: data.type || "unknown",
      destination: data.destination || "unknown",
      cost: data.cost || "unknown",
      imageUrl: data.imageUrl || "https://example.com/default.jpg"
    };
    return details;
  } catch (error) {
    console.error("Error fetching activity details:", error);
    return { error: "Failed to fetch activity details" };
  }
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
  getRandomActivities,
  getActivityDetails,
  getPosts
};

getFilteredActivities({ type: 'hiking', cost: 'low' }).then(filteredActivities => {
  console.log('Filtered activities for type "hiking" and cost "low":', filteredActivities);
});

getPosts();
