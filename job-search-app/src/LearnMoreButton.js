// LearnMoreButton.js
import React from 'react';
import { Link } from 'react-router-dom';

function LearnMoreButton() {
    return (
        <Link to="/about" className="learn-more-button">Learn More</Link>
      );
}

export default LearnMoreButton;
