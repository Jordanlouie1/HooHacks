import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TitlePage from './TitlePage';
import FindJobsButton from './FindJobButtons'; // Import your FindJobsPage component here
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TitlePage />} />
          <Route path="/find-jobs" element={<FindJobsButton />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;