import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/esm/Button';

import {getPostById, deletePost, fetchGetPostById} from '../../../redux/postsRedux';
import {getUser} from '../../../redux/userRedux';
import styles from './Post.module.scss';

const Post = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchGetPostById(id));
  }, [dispatch]);

  const post = useSelector(state => getPostById(state, id));
  const userLogged = useSelector(state => getUser(state));

  const handleDelete = () => {
    // dispatch(deletePost(id));
    navigate(`/`);
  };

  if (Object.keys(post).length !== 0)
    return (
      <div className={styles.post}>
        <div className={styles.header + ' d-flex justify-content-between'}>
          <h3>{post.title}</h3>
          <div className="buttons d-flex">
            {(userLogged === 'admin' || userLogged === post.user) && (
              <Nav.Link className="me-2 p-0" as={NavLink} to={`/post/edit/${post._id}`}>
                <Button variant="success">Edit</Button>
              </Nav.Link>
            )}
            {(userLogged === 'admin' || userLogged === post.user) && (
              <Nav.Link className="me-2 p-0" as={NavLink} to="/">
                <Button onClick={handleDelete} variant="danger">
                  Delete
                </Button>
              </Nav.Link>
            )}
          </div>
        </div>
        <div className={styles.post_content}>
          <div className={styles.post_photo}>
            <img
              className={styles.main_photo}
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2516&q=80"
              alt=""
            />
          </div>
          <div className={styles.post_text}>
            <div className="content mt-4">
              <p>{post.content}</p>
              {post.localization && <p>Localization: {post.localization}</p>}
              {post.price && <p>Price: {post.price}</p>}
              <p>Add date: {post.publishedDate}</p>
              <p>User: {post.user}</p>
              {post.phoneNumber && <p>Phone number: {post.phoneNumber}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  else {
    return <h4>Can't find Post with id: {id}</h4>;
  }
};

export default Post;
