import React from 'react';
import PostsList from '../../features/PostsList/PostsList';
import {useParams} from 'react-router';
import {useSelector} from 'react-redux';
import {searchPostByTitle} from '../../../redux/postsRedux';

const SearchResults = () => {
  const {searchPhrase} = useParams();
  const posts = useSelector(state => searchPostByTitle(state, searchPhrase));

  if (posts.length !== 0)
    return (
      <div>
        <h2>Results for: {searchPhrase}</h2>
        <PostsList posts={posts} />
      </div>
    );
  else return <h3>No results</h3>;
};

export default SearchResults;
