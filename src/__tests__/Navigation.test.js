import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import ActivityService from '../ActivityService';

// Mock ActivityService to control the test data
jest.mock('../ActivityService', () => ({
  getActivities: () =>
    Promise.resolve([
      {
        id: 1,
        name: "Hiking Adventure",
        description: "Explore scenic hiking trails and enjoy breathtaking views.",
        destination: "Rocky Mountains",
        imageUrl: "https://example.com/hiking.jpg"
      }
    ])
}));

test('clicking on an ActivityCard navigates to ActivityDetails with the correct data', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  // Wait for the ActivityCard to render
  const activityName = await screen.findByText("Hiking Adventure");
  expect(activityName).toBeInTheDocument();

  // Find the link wrapping the ActivityCard and simulate a click
  const activityCardLink = activityName.closest('a');
  expect(activityCardLink).toBeInTheDocument();

  userEvent.click(activityCardLink);

  // After the navigation, confirm ActivityDetails view is displayed.
  const detailsHeading = await screen.findByRole('heading', { name: /Hiking Adventure/i });
  expect(detailsHeading).toBeInTheDocument();

  const destinationText = screen.getByText(/Rocky Mountains/i);
  expect(destinationText).toBeInTheDocument();
});
