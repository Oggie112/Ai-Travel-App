import React from 'react';
import ActivityList from './components/ActivityList';
import Favorites from './components/Favorites';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to your next Adventure Holiday</h1>
        <p>Your one-stop solution for all your awesome needs.</p>
      </header>
      <main className="landing-main">
        <ActivityList />
        <Favorites />
      </main>
    </div>
  );
}

export default LandingPage;
