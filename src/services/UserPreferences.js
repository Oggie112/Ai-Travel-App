import { getItem, setItem } from '../localStorage';

const FAVORITES_KEY = 'favorites';
const FILTERS_KEY = 'filters';

const UserPreferences = {
  getFavorites() {
    const favorites = getItem(FAVORITES_KEY);
    return favorites ? favorites : [];
  },
  setFavorites(favorites) {
    // If favorites array contains more than 2 items, prompt user to decide on a replacement.
    if (favorites.length > 2) {
      // Assume the newly added favorite is at the end of the array.
      const newFavorite = favorites[favorites.length - 1];
      const replace = window.confirm(
        `You already have 2 favorites. Do you want to replace your first favorite (${favorites[0].name}) with ${newFavorite.name}?`
      );
      if (replace) {
        // Remove the first favorite to replace it with the new one.
        favorites.shift();
      } else {
        // Remove the newly added favorite and keep the existing two.
        favorites.pop();
      }
    }
    setItem(FAVORITES_KEY, favorites);
  },
  getFilters() {
    const filters = getItem(FILTERS_KEY);
    return filters ? filters : {};
  },
  setFilters(filters) {
    setItem(FILTERS_KEY, filters);
  }
};

export default UserPreferences;
