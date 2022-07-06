import {createStore, combineReducers} from 'redux';

import initialState from './initialState';
import postsRedux from './postsRedux.js';
import userRedux from './userRedux.js';

const subreducers = {
  posts: postsRedux,
  user: userRedux,
};

const reducer = combineReducers(subreducers);

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
