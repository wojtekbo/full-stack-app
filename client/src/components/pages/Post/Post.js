import React from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/esm/Button';

import {getPostById, deletePost} from '../../../redux/postsRedux';
import {isAuthorised} from '../../../redux/permissionsRedux';

const Post = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const post = useSelector(state => getPostById(state, id));
  const userLoged = useSelector(state => isAuthorised(state));
  const handleDelete = () => {
    console.log('delete: ', post.id);
    dispatch(deletePost(id));
    navigate(`/`);
  };

  return (
    <div className="post p-4 d-flex flex-column">
      <div className="header d-flex justify-content-between">
        <h3>Title: {post.title}</h3>
        <div className="buttons d-flex">
          {userLoged && (
            <Nav.Link className="me-2 p-0" as={NavLink} to={`/post/edit/${post.id}`}>
              <Button variant="success">Edit</Button>
            </Nav.Link>
          )}
          {userLoged && (
            <Button onClick={handleDelete} variant="danger">
              Delete
            </Button>
          )}
        </div>
      </div>

      <div className="photo w-100">
        <img
          className="w-75"
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2516&q=80"
          alt=""
        />
      </div>
      <div className="d-flex flex-column data">
        <div className="content mt-4">
          <p>Content: {post.content}</p>
          <p>Localization: {post.localization}</p>
          <p>Price: {post.price}</p>
          <p>Add date: {post.publishedDate.toLocaleString('en-GB')}</p>
        </div>
        <div className="user mt-4">
          <p>Login: {post.user.login}</p>
          <p>Author: {post.user.fullName}</p>
          <p>Phone number: {post.user.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
