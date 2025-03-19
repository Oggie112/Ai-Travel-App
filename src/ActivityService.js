const activities = [
  {
    id: 1,
    name: "Hiking Adventure",
    description: "Explore scenic hiking trails and enjoy breathtaking views."
  },
  {
    id: 2,
    name: "Kayaking Journey",
    description: "Enjoy serene kayaking on calm waters while experiencing nature up close."
  },
  {
    id: 3,
    name: "Mountain Biking",
    description: "Experience thrilling mountain biking adventures on rugged terrain."
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
