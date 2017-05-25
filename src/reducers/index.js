// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import projects from './projectReducer';

const rootReducer = combineReducers({
  projects,
  routing: routerReducer
});


export default rootReducer;