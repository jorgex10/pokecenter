import { combineReducers } from 'redux';
import typesReducer from './reducers/typesReducer';

export default combineReducers({
  types: typesReducer,
});
