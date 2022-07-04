import React from 'react';
import {useSelector} from 'react-redux';
import {getAllPosts} from '../../../redux/postsRedux';

const PostsList = () => {
  const adverts = useSelector(state => getAllPosts(state));
  return (
    <div>
      <h1>Posts List</h1>
      {adverts.map(post => {
        return (
          <>
            <h3>{post.title}</h3>
            <p>{post.author}</p>
          </>
        );
      })}
    </div>
  );
};

export default PostsList;
