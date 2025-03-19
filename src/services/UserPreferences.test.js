import UserPreferences from './UserPreferences';

describe('UserPreferences', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('should save and load a favorites array', () => {
    const favoritesArray = [
      { id: 1, name: "Hiking Adventure" },
      { id: 2, name: "Kayaking Journey" }
    ];
    UserPreferences.setFavorites(favoritesArray);
    const loadedFavorites = UserPreferences.getFavorites();
    expect(loadedFavorites).toEqual(favoritesArray);
  });
});
