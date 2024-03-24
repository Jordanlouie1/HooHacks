// TitlePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TitlePage.css'; // Import the CSS file for styling

function TitlePage() {
  return (
    <div className="title-page">
      <div className="content">
        <h1>Welcome to <span className="credibly-logo">Credibly</span></h1>
        <p className="description">An app designed to help individuals with backgrounds that make it difficult to find a job.</p>
        <p className="description">Whether you're a returning citizen, a refugee, or have faced other challenges in your past, Credibly is here to assist you in finding employment opportunities that match your skills and aspirations.</p>
        <Link to="/find-jobs" className="get-started-button">Get Started</Link>
      </div>
    </div>
  );
}

export default TitlePage;