import React, { useState } from 'react';
import ListCard from '../components/ListCard';
import SearchComponent from '../components/SearchComponent';

const CandidateHomePage = ({ referrals, services, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredReferrals = referrals.filter(referral =>
    referral.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    referral.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredServices = services.filter(service =>
    service.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Candidate Home</h2>
      <button onClick={onLogout}>Logout</button>
      <SearchComponent onSearch={setSearchQuery} />
      <h3>Referrals</h3>
      {filteredReferrals.map((referral) => (
        <ListCard key={referral.id} item={referral} />
      ))}
      <h3>Services</h3>
      {filteredServices.map((service) => (
        <ListCard key={service.id} item={service} />
      ))}
    </div>
  );
};

export default CandidateHomePage;
