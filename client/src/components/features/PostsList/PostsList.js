import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

const PostsList = ({posts}) => {
  return (
    <div className="m-4">
      {posts.map(post => {
        return (
          <div key={post._id} className="post d-flex bg-light p-3 mb-2">
            <div className="content w-100">
              <h4>{post.title}</h4>
              <p>{post.localization}</p>
            </div>
            <div className="buttons">
              <Nav.Link as={NavLink} to={`/post/${post._id}`}>
                <Button>details</Button>
              </Nav.Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;
