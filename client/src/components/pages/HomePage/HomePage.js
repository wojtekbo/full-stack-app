import React from 'react';
import PostsList from '../../features/PostsList/PostsList';
import {useSelector} from 'react-redux';
import {getAllPosts} from '../../../redux/postsRedux';
import Button from 'react-bootstrap/esm/Button';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import {isAuthorised} from '../../../redux/permissionsRedux';

const HomePage = () => {
  const posts = useSelector(state => getAllPosts(state));
  const userLoged = useSelector(state => isAuthorised(state));
  return (
    <div>
      <h2>Posts:</h2>
      <PostsList posts={posts} />
      {userLoged && (
        <div className="d-flex">
          <Nav.Link as={NavLink} to={`/post/add`}>
            <Button variant="success">Add Post</Button>
          </Nav.Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
