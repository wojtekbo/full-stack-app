import React from 'react';
import PostForm from '../../features/PostForm/PostForm';
import {getUser} from '../../../redux/userRedux';
import {useDispatch, useSelector} from 'react-redux';
import {addPost} from '../../../redux/postsRedux';
import {useNavigate} from 'react-router-dom';

const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogged = useSelector(state => getUser(state));
  const handleClick = post => {
    dispatch(addPost(post));
    navigate('/');
  };

  if (!userLogged) return <h3>No permission</h3>;
  else
    return (
      <div>
        <h3>Edit Post</h3>
        <PostForm action={handleClick} actionText="Dodaj post" />
      </div>
    );
};

export default AddPost;
