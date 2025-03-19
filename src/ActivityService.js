const activities = [
  {
    id: 1,
    name: "Hiking Adventure",
    description: "Explore scenic hiking trails and enjoy breathtaking views.",
    destination: "Rocky Mountains",
    imageUrl: "https://example.com/hiking.jpg"
  },
  {
    id: 2,
    name: "Kayaking Journey",
    description: "Enjoy serene kayaking on calm waters while experiencing nature up close.",
    destination: "Lake Tahoe",
    imageUrl: "https://example.com/kayaking.jpg"
  },
  {
    id: 3,
    name: "Mountain Biking",
    description: "Experience thrilling mountain biking adventures on rugged terrain.",
    destination: "Alpine Valley",
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

export default {
  getActivities
};
