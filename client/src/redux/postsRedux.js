import uniqid from 'uniqid';

//selectors
export const getAllPosts = ({posts}) => posts;
export const getPostById = ({posts}, id) => posts.filter(post => post.id === id)[0];
export const searchPostByTitle = ({posts}, searchPhrase) => posts.filter(post => post.title.toLowerCase().includes(searchPhrase.toLowerCase()));

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');
const REMOVE_POST = createActionName('REMOVE_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const addPost = payload => ({type: ADD_POST, payload});
export const deletePost = payload => ({type: REMOVE_POST, payload});
export const editPost = payload => ({type: EDIT_POST, payload});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, {...action.payload, id: uniqid()}];
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload);
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id ? {...post, ...action.payload} : post));
    default:
      return statePart;
  }
};

export default postsReducer;
