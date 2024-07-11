import React from 'react';
import ReferralListCard from './ReferralListCard';
import ServicesListCard from './ServicesListCard';
import SearchComponent from './SearchComponent';

const CandidateHome = ({ referrals, services, onLogout, onSearch }) => {
  return (
    <div>
      <h2>Referral List</h2>
      {referrals.map((referral) => (
        <ReferralListCard key={referral.id} referral={referral} />
      ))}
      
      <h2>Services</h2>
      {services.map((service) => (
        <ServicesListCard key={service.id} service={service} />
      ))}
      
      <SearchComponent onSearch={onSearch} />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default CandidateHome;
