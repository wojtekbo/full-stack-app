import {createStore, combineReducers} from 'redux';

import initialState from './initialState';
import postsRedux from './postsRedux.js';
import permissionsRedux from './permissionsRedux.js';

const subreducers = {
  posts: postsRedux,
  permissions: permissionsRedux,
};

const reducer = combineReducers(subreducers);

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
