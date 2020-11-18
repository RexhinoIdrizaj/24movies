import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import MoviesReducer from './reducers/movies';

const middleware = [thunk];

// if we would have more then one reducers would use combineReducers
const rootReducer = combineReducers({
  movies: MoviesReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(...middleware));
};

export default configureStore;
