# Architecture Design Decision (ADD) - Travel Planning App

## Context
The app aims to provide a simple, visually-driven way for adventure seekers to explore holiday options based on activity types, destinations, and filters. The app allows users to discover activities, compare options, save favorites, and refine their searches.

### Main Functionalities:
- Display random activity-destination pairs.
- Allow users to favorite up to two activities and compare them.
- Provide filters for refining activity searches (e.g., activity type, destination, cost).
- Show activity details with rough cost estimates and booking suggestions.
- Simple, minimalist interface with image-centric design.

## Key Architecture Requirements
1. **Simplicity (KISS)**: The architecture must be simple and easy to implement within a limited time frame (a few hours). Avoid complexity while maintaining essential functionality.
2. **Modularity**: Each component or module should have a clear, single responsibility, which enhances maintainability and testability.
3. **Performance**: The app should work efficiently with minimal resource overhead.
4. **Responsiveness**: The app should be responsive, displaying results quickly and efficiently after applying filters or selecting favorites.
5. **Local Storage**: User preferences (filters and favorites) should be stored locally to ensure persistence without requiring complex back-end storage or user authentication.
6. **Scalability**: While the app will start simple, it should be easy to scale in the future with more activities, filters, or integrations.

---

## Architecture Overview

The app follows a **modular, component-based** architecture with a **React** frontend, leveraging local state management and minimal external dependencies.

### Components
1. **ActivityService (Backend)**:
   - Responsible for fetching and filtering activities.
   - Interacts with external APIs (e.g., Viator, Skyscanner) or static data sources.
   - Methods:
     - `getRandomActivities()`: Fetches a list of random activities.
     - `getFilteredActivities(filters)`: Fetches activities based on applied filters.
     - `getActivityDetails(id)`: Provides detailed information for an activity.

2. **UserPreferences (Frontend)**:
   - Manages user preferences, including filters and favorites.
   - Uses **local storage** to persist preferences between app sessions.
   - Methods:
     - `getFavorites()`: Retrieves the list of user’s favorite activities (max 2).
     - `setFavorites(favorites)`: Updates the favorites list.
     - `getFilters()`: Retrieves the current active filters.
     - `setFilters(filters)`: Saves and updates the filters.

3. **UI Components (Frontend)**:
   - Modular and reusable components for rendering UI elements.
   - Components include:
     - `ActivityCard`: Displays a single activity.
     - `ActivityList`: Displays a list of activities.
     - `Filters`: Manages and applies user-selected filters.
     - `ActivityDetails`: Displays detailed information about a selected activity.
     - `Favorites`: Displays the user’s favorite activities and allows updates.

### Interaction Between Components:
- The **Frontend** interacts with the **UserPreferences** to manage filters and favorites.
- The **ActivityService** is queried for random and filtered activities, and it fetches data from external sources or a local database.
- **UI Components** update based on user actions (e.g., selecting a favorite, applying filters, or clicking on an activity for more details).

---

## Key Architectural Decisions

1. **Frontend (React)**:
   - **Functional Components with Hooks**: We use **functional components** and **React hooks** (`useState`, `useEffect`) for local state management and side effects (API calls, filters).
   - **Local Storage for Persistence**: User preferences (filters and favorites) are stored using **local storage** to maintain state across sessions without server-side interactions.
   
2. **Backend (ActivityService)**:
   - **Lightweight Service**: The backend will be a simple service that returns activity data based on random selection or filters. It will interact with external APIs or a mock database.
   - **Simple API Calls**: Activities are fetched based on filters (e.g., type, destination), with minimal processing required on the backend.

3. **Data Flow**:
   - **Filters and Favorites**: The user’s filters and favorites are stored in the frontend state and local storage. Changes to filters will trigger a call to the backend to fetch filtered activities.
   - **Activity Details**: When a user selects an activity, detailed information is displayed, including estimated costs, descriptions, and booking suggestions.

---

## Design Patterns Employed

1. **Singleton Pattern**:
   - The **UserPreferences** module will be implemented as a singleton to ensure a single source of truth for user preferences (filters and favorites).
   
2. **Factory Pattern**:
   - **ActivityService** can implement a factory method to handle different types of data sources (e.g., external APIs, static files) for fetching activities, making it flexible and extendable.

3. **Observer Pattern**:
   - UI components will observe changes in **UserPreferences** (filters and favorites) and automatically update the UI when the state changes (e.g., after applying filters or adding a favorite).

---

## Trade-offs Considered

- **User Authentication**: Authentication was excluded to keep the system simple and focus on the core functionalities. This also avoids the complexity of managing user data.
- **External API Integration**: External API integrations for activity booking or cost estimation are simplified to only show rough estimates and links, avoiding direct integrations with external systems for booking.
- **Backend Complexity**: The backend is kept lightweight and is designed to fetch and filter data with minimal processing to avoid unnecessary overhead.

---

## Conclusion

This architecture balances simplicity with essential features. By leveraging **React** and **local storage**, the app can be rapidly developed with minimal complexity. The modular architecture ensures the app can be easily extended or scaled in the future with more activities, filters, or integrations, without introducing unnecessary complexity. The choice of design patterns ensures flexibility and maintainability as the app evolves.

---

### Next Steps
- Begin implementing the **UI components** and integrate with the **ActivityService** for activity fetching and filtering.
- Use **local storage** to persist user preferences (filters and favorites).
- Focus on building a **minimal MVP** with essential features (activity discovery, filtering, and favorites) and ensure a smooth user experience.
