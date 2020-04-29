import { combineReducers } from 'redux';
import pokemonTypesReducer from './reducers/pokemonTypesReducer';

export default combineReducers({
  pokemonTypes: pokemonTypesReducer,
});
