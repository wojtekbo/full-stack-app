import uniqid from 'uniqid';
import axios from 'axios';

//selectors
export const getAllPosts = ({posts}) => posts.allPostsData;
export const getPostById = ({posts}) => posts.postData;
export const searchPostByTitle = ({posts}, searchPhrase) => posts.allPostsData.filter(post => post.title.toLowerCase().includes(searchPhrase.toLowerCase()));

/* thunk creators */
export const fetchGetAllPosts = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    axios
      .get('http://localhost:8000/api/posts')
      .then(res => {
        dispatch(fetchPostsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchGetPostById = id => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    axios
      .get(`http://localhost:8000/api/posts/${id}`)
      .then(res => {
        dispatch(fetchPostSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchPostNewPost = post => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    axios
      .post('http://localhost:8000/api/posts', post)
      .then(res => {
        dispatch(addPost(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

// actions
const createActionName = actionName => `app/posts/${actionName}`;

const FETCH_START = createActionName('FETCH_START');
const FETCH_POSTS_SUCCESS = createActionName('FETCH_POSTS_SUCCESS');
const FETCH_POST_SUCCESS = createActionName('FETCH_POST_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const ADD_POST = createActionName('ADD_POST');
const REMOVE_POST = createActionName('REMOVE_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const fetchStarted = payload => ({payload, type: FETCH_START});
export const fetchPostsSuccess = payload => ({payload, type: FETCH_POSTS_SUCCESS});
export const fetchPostSuccess = payload => ({payload, type: FETCH_POST_SUCCESS});
export const fetchError = payload => ({payload, type: FETCH_ERROR});

export const addPost = payload => ({type: ADD_POST, payload});
export const deletePost = payload => ({type: REMOVE_POST, payload});
export const editPost = payload => ({type: EDIT_POST, payload});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case FETCH_START: {
      return {...statePart, loading: {active: true, error: false}};
    }
    case FETCH_POSTS_SUCCESS: {
      return {...statePart, loading: {active: false, error: false}, allPostsData: action.payload};
    }
    case FETCH_POST_SUCCESS: {
      return {...statePart, loading: {active: false, error: false}, postData: action.payload};
    }
    case FETCH_ERROR: {
      return {...statePart, loading: {active: false, error: action.payload}};
    }
    case ADD_POST:
      return [...statePart, {...action.payload, id: uniqid()}];
    case REMOVE_POST:
      return statePart.allPostsData.filter(post => post._id !== action.payload);
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id ? {...post, ...action.payload} : post));
    default:
      return statePart;
  }
};

export default postsReducer;
