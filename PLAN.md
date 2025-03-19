# Prompts for Code-Generation LLM

## Prompt 1: Initialize React Project
Initialize a React project using create-react-app. Name it 'travel-planner'. Install the necessary dependencies and ensure the app runs with a basic "Travel Planner" title on the screen. Output should be a working React app with a single page.

## Prompt 2: Install Local Storage Utilities
In the 'travel-planner' React project, create a `utils/storage.js` file. Implement two functions: `saveToStorage(key, value)` to save a JSON-serialized value to localStorage, and `loadFromStorage(key)` to retrieve and parse it. Export both functions. Test by saving and loading a simple string.

## Prompt 3: Create Basic Landing Page
In the 'travel-planner' React project, replace the default `App.js` content with a `LandingPage` component. Add a centered `<h1>` tag with "Adventure Holiday Planner" as the title. Apply basic CSS in `App.css` for a clean, minimalistic look (e.g., font-size, margin). Ensure it renders correctly.

## Prompt 4: Create ActivityService with Mock Data
In the 'travel-planner' React project, create a `services/ActivityService.js` file. Implement a function `getRandomActivities()` that returns an array of 5 mock activity objects, each with `id`, `name`, `type`, `destination`, and `imageUrl` properties. Export the function. Test it by logging the result to the console.

## Prompt 5: Build ActivityCard Component
In the 'travel-planner' React project, create a `components/ActivityCard.js` file. Define a functional component `ActivityCard` that takes an `activity` prop (with `name`, `type`, `destination`, `imageUrl`). Render an image and the activity name in a card layout. Add basic CSS in `ActivityCard.css` for an image-centric design. Export the component.

## Prompt 6: Build ActivityList Component
In the 'travel-planner' React project, create a `components/ActivityList.js` file. Define a functional component `ActivityList` that imports `ActivityService` and `ActivityCard`. Use `useState` and `useEffect` to fetch 5 random activities from `getRandomActivities()` and render them as a list of `ActivityCard` components. Export the component and replace the `LandingPage` content with it.

## Prompt 7: Create ActivityDetails Component
In the 'travel-planner' React project, create a `components/ActivityDetails.js` file. Define a functional component `ActivityDetails` that takes an `activity` prop. Render the activity’s `name`, `type`, and `destination` in a simple layout. Add basic CSS in `ActivityDetails.css` for readability. Export the component.

### Prompt 8.1: Set Up Routing with `react-router-dom`
In the 'travel-planner' React project, install `react-router-dom`. Update `App.js` to use `BrowserRouter` and define two routes:
- `/` for `LandingPage`
- `/activity/:id` for `ActivityDetails`

Ensure that `ActivityDetails` can receive the `id` parameter from the route. 

### Prompt 8.2: Link Activity Cards to Activity Details
Modify `ActivityCard` to wrap its content in a `Link` to `/activity/${activity.id}`. Pass the selected activity to `ActivityDetails` via route state. 

Test the navigation to ensure clicking an `ActivityCard` correctly navigates to `ActivityDetails` with the appropriate data.


## Prompt 9: Implement UserPreferences Singleton
In the 'travel-planner' React project, create a `services/UserPreferences.js` file. Implement a singleton object with `getFavorites()` (loads from storage or returns empty array), `setFavorites(favorites)` (saves to storage), `getFilters()`, and `setFilters(filters)` (similarly). Use `utils/storage.js`. Export the object. Test by saving and loading a favorites array.

## Prompt 10: Add Favorite Button
In the 'travel-planner' React project, update `ActivityDetails.js` to import `UserPreferences`. Add a "Favorite" button that calls `setFavorites` with the current activity appended to the existing favorites list (no limit yet). Add basic CSS for the button. Ensure it updates local storage when clicked.

## Prompt 11: Limit Favorites to 2
In the 'travel-planner' React project, modify `UserPreferences.js`’s `setFavorites` to check if the favorites array exceeds 2 items. If so, use `window.confirm` to prompt the user to replace an existing favorite (e.g., "Replace [name]?"). Update the array accordingly. Test by adding 3 activities and confirming replacement.

## Prompt 12: Create Favorites Component
In the 'travel-planner' React project, create a `components/Favorites.js` file. Define a functional component `Favorites` that uses `UserPreferences`’s `getFavorites` to display a list of favorited activities as `ActivityCard` components. Add it below the `ActivityList` in `LandingPage`. Style it with basic CSS in `Favorites.css`.

## Prompt 13: Add Filters Component
In the 'travel-planner' React project, create a `components/Filters.js` file. Define a functional component `Filters` with `<select>` elements for `type` (e.g., hiking, surfing) and `cost` (e.g., low, medium). Use `useState` to track selections and call `UserPreferences.setFilters` on change. Add it above `ActivityList` in `LandingPage`. Style with CSS.

## Prompt 14: Extend ActivityService with Filtering
In the 'travel-planner' React project, update `ActivityService.js` to add `getFilteredActivities(filters)` that filters the mock data based on `type` and `cost` from the `filters` object. Return the filtered list (or all if no filters). Test by calling it with sample filters and logging the result.

## Prompt 15: Wire Filters to ActivityList
In the 'travel-planner' React project, update `ActivityList.js` to use `UserPreferences.getFilters` in `useEffect`. Pass the filters to `getFilteredActivities` instead of `getRandomActivities`. Ensure the list updates when filters change in `Filters`. Test by applying filters and checking the UI.

## Prompt 16: Add No-Results Message
In the 'travel-planner' React project, update `ActivityList.js` to check if the filtered activities array is empty. If so, render a "No activities match your filters" message instead of the list. Style it with CSS for visibility. Test by applying strict filters (e.g., empty type).

## Prompt 17: Install Axios for API Requests
In the 'travel-planner' React project, install Axios via npm. Import it in `ActivityService.js` and test it by making a simple GET request to a mock API (e.g., `https://jsonplaceholder.typicode.com/posts`) and logging the response. Ensure it’s working.

## Prompt 18: Fetch Random Activities from API
In the 'travel-planner' React project, update `ActivityService.js`’s `getRandomActivities` to use Axios to fetch data from a mock API (e.g., `https://api.mocki.io/v2/12345` with activity-like JSON). Map the response to the expected format (`id`, `name`, `type`, `destination`, `imageUrl`). Replace the mock data and test in `ActivityList`.

## Prompt 19: Fetch Activity Details from API
In the 'travel-planner' React project, add `getActivityDetails(id)` to `ActivityService.js` to fetch details from the mock API using the `id`. Update `ActivityDetails.js` to call this function with the route’s `id` and display the fetched data. Test by navigating to an activity.

## Prompt 20: Add Cost and Booking Links
In the 'travel-planner' React project, update `ActivityDetails.js` to display a mock `cost` (e.g., "$100-$200") and a "Book Now" link (e.g., `https://example.com`). Assume these fields come from the API response. Style them with CSS for clarity. Test the display.

# Got up to here!

## Prompt 21: Add API Error Handling
In the 'travel-planner' React project, update `ActivityService.js` to wrap Axios calls in try-catch blocks. Return an `error` property (e.g., `{ error: "Failed to fetch" }`) if the request fails. Test by using an invalid API URL and logging the result.

## Prompt 22: Show Error Messages in UI
In the 'travel-planner' React project, update `ActivityList.js` and `ActivityDetails.js` to check for an `error` property in the data. If present, render "Oops, something went wrong" instead of the content. Style it with CSS. Test with an invalid API call.

## Prompt 23: Apply Minimalistic CSS
In the 'travel-planner' React project, update `ActivityCard.css` and `ActivityList.css` with a minimalistic design: neutral background, subtle borders, and large images. Add subtle color accents (e.g., blue for buttons). Ensure the UI remains image-focused and clean.

## Prompt 24: Add Smooth Transitions
In the 'travel-planner' React project, install `react-transition-group`. Wrap `ActivityList` and `ActivityDetails` in `CSSTransition` components with a 300ms fade effect. Define the transitions in `App.css`. Test by navigating between screens.

## Prompt 25: Write Unit Tests for ActivityService
In the 'travel-planner' React project, install Jest (comes with create-react-app). Create `ActivityService.test.js` and write tests for `getRandomActivities`, `getFilteredActivities`, and `getActivityDetails`. Mock Axios responses and verify the output matches expectations. Run the tests.

---

### Notes
- Each prompt is atomic, builds on the previous step, and integrates into the overall app structure.
- The prompts assume a web-based React app (per the ADD’s focus on simplicity), but they can be adapted for React Native if needed.
- File paths (e.g., components/, services/) assume a standard React project structure.
- Mock APIs are placeholders; replace with real APIs (e.g., Viator, Skyscanner) as needed.
