import React from 'react';

const ServicesListCard = ({ service }) => {
  return (
    <div>
      <h3>{service.type}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export default ServicesListCard;
