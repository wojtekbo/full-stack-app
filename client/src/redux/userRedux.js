//selectors
export const getUser = ({user}) => {
  if (user) return user.login;
  else return null;
};

// actions
const createActionName = actionName => `app/user/${actionName}`;
const EDIT_USER = createActionName('EDIT_USER');

// action creators
export const editUser = payload => ({type: EDIT_USER, payload});

const userReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_USER:
      if (action.payload) {
        return {login: action.payload};
      } else {
        return {login: null};
      }
    default:
      return statePart;
  }
};

export default userReducer;
