import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import CandidateHomePage from './pages/CandidateHomePage';
import './App.css'

const App = () => {
  const [referrals, setReferrals] = useState([]);
  const [services, setServices] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    fetchReferralsAndServices();
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  };

  const fetchReferralsAndServices = async () => {
    
    const fetchedReferrals = [
      { id: 1, companyName: 'Company A', industry: 'Tech', description: 'Referral for Tech position' },
      { id: 2, companyName: 'Company B', industry: 'Finance', description: 'Referral for Finance position' },
    ];
    const fetchedServices = [
      { id: 1, type: 'Resume Review', description: 'Professional review of resume' },
      { id: 2, type: 'Interview Handhold', description: 'Guidance for interviews' },
    ];

    setReferrals(fetchedReferrals);
    setServices(fetchedServices);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    console.log(`${username} logged in`);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage onSearch={() => {}} />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/candidate/home"
          element={
            isLoggedIn ? (
              <CandidateHomePage
                referrals={referrals}
                services={services}
                onLogout={handleLogout}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
