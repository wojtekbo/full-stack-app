import React from 'react';
import {useParams} from 'react-router';
import {useSelector} from 'react-redux';
// import {useDispatch} from 'react-redux';
import {getPostById} from '../../../redux/postsRedux.js';

const Post = props => {
  //   const dispatch = useDispatch();
  const {id} = useParams();
  const post = useSelector(state => getPostById(state, id));
  console.log('post', post);
  return (
    <>
      <p>ID: {id}</p>
      <p>Title: {post.title}</p>
      <p>Author: {post.author}</p>
      <p>
        Date:
        {post.publishedDate.toLocaleString('en-GB')}
      </p>
      <p>Content: {post.content}</p>
      <p>Localization: {post.localization}</p>
      <p>Price: {post.price}</p>
    </>
  );
};

export default Post;
