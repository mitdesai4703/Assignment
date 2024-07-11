import React from 'react';
import SearchComponent from '../components/SearchComponent';

const IndexPage = ({ onSearch }) => {
  return (
    <div>
      <h1>Welcome to Worko</h1>
      <SearchComponent onSearch={onSearch} />
      <a href="/login">Login</a>
    </div>
  );
};

export default IndexPage;
