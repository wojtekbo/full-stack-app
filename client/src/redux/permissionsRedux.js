//selectors
export const getPermissions = ({permissions}) => permissions;

// actions
const createActionName = actionName => `app/permissions/${actionName}`;
const EDIT_PERMISSION = createActionName('EDIT_PERMISSION');

// action creators
export const editPermission = payload => ({type: EDIT_PERMISSION, payload});

const permissionsReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_PERMISSION:
      console.log(action.payload);
      return {authorised: action.payload};
    default:
      return statePart;
  }
};

export default permissionsReducer;