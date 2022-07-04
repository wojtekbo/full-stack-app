import React from 'react';
import PostsList from '../../features/PostsList/PostsList';
import SearchForm from '../../features/SearchForm/SearchForm';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <SearchForm />
      <PostsList />
    </div>
  );
};

export default HomePage;
