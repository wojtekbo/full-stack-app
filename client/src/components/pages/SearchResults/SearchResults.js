import React, {useEffect} from 'react';
import PostsList from '../../features/PostsList/PostsList';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {fetchGetAllPosts, searchPostByTitle} from '../../../redux/postsRedux';

const SearchResults = () => {
  const {searchPhrase} = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetAllPosts());
  }, [dispatch]);

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
