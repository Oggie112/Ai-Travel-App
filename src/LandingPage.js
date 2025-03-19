import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to Our Awesome App</h1>
        <p>Your one-stop solution for all your needs.</p>
      </header>
      <main className="landing-main">
        <button className="get-started-button">Get Started</button>
      </main>
    </div>
  );
}

export default LandingPage;
