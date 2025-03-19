import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ActivityDetails from './components/ActivityDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/activity/:id" element={<ActivityDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
