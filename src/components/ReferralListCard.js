import React from 'react';

const ReferralListCard = ({ referral }) => {
  return (
    <div>
      <h3>{referral.companyName}</h3>
      <p>{referral.description}</p>
    </div>
  );
};

export default ReferralListCard;
