//selectors
export const getAllPosts = ({posts}) => posts;
export const getPostById = ({posts}, id) => posts.filter(post => post.id === id)[0];
export const searchPostByTitle = ({posts}, searchPhrase) => posts.filter(post => post.title.toLowerCase().includes(searchPhrase.toLowerCase()));

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');

// action creators
export const deletePost = payload => ({type: REMOVE_POST, payload});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload);
    default:
      return statePart;
  }
};

export default postsReducer;
