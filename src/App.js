import React from 'react';
import { Route } from 'react-router';
import CustonNav from './components/CustomNav';
import './assets/styles/App.scss';
import PokemonTypes from './pages/PokemonTypes';
import Building from './pages/Building';
import HomePage from './pages/HomePage';
import store from './store';
import { loadPokemonTypes } from './actions/pokemonTypesAction';
import PokemonTypeDetail from './pages/PokemonTypeDetail';

store.dispatch(loadPokemonTypes());

const App = () => (
  <>
    <CustonNav />
    <div className="container pt-10">
      <Route path="/" exact component={HomePage} />
      <Route path="/pokemon-types" exact component={PokemonTypes} />
      <Route path="/pokemon-types/:name" exact component={PokemonTypeDetail} />
      <Route path="/building" exact component={Building} />
    </div>
  </>
);
export default App;
