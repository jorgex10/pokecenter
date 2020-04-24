import React from 'react';
import { Route } from 'react-router';
import CustonNav from './components/CustomNav';
import './assets/styles/App.scss';
import Locations from './pages/Locations';
import Building from './pages/Building';

const App = () => (
  <>
    <CustonNav />
    <div className="container pt-10">
      <Route path="/" exact component={Locations} />
      <Route path="/pokemons" exact component={Building} />
    </div>
  </>
);
export default App;
