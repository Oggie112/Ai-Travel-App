import { getItem, setItem } from '../localStorage';

const FAVORITES_KEY = 'favorites';
const FILTERS_KEY = 'filters';

const UserPreferences = {
  getFavorites() {
    const favorites = getItem(FAVORITES_KEY);
    return favorites ? favorites : [];
  },
  setFavorites(favorites) {
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
