import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {fetchGetPostById, getPostById} from '../../../redux/postsRedux';
import {getUser} from '../../../redux/userRedux';
import {editPost} from '../../../redux/postsRedux';
import PostForm from '../../features/PostForm/PostForm';

const EditPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchGetPostById(id));
  }, [dispatch, id]);

  const post = useSelector(state => getPostById(state, id));
  const userLogged = useSelector(state => getUser(state));

  const {title, content, publishedDate, photo, price, localization, user, phone} = post;

  const handleClick = post => {
    // dispatch(editPost({...post, id}));
    navigate('/');
  };

  if (userLogged === post.user || userLogged === 'admin')
    return (
      <div>
        <h3>Edit Post</h3>
        <PostForm
          action={handleClick}
          actionText="Zapisz zmiany"
          title={title}
          content={content}
          phone={phone}
          publishedDate={publishedDate}
          photo={photo}
          price={price}
          localization={localization}
          user={user}
        />
      </div>
    );
  else return <h3>No permission</h3>;
};

export default EditPost;
