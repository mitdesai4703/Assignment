import React from 'react';

const ListCard = ({ item }) => {
  return (
    <div>
      <h4>{item.companyName || item.type}</h4>
      <p>{item.description}</p>
    </div>
  );
};

export default ListCard;
