import React from 'react';
import { Route } from 'react-router';
import CustonNav from './components/CustomNav';
import './assets/styles/App.scss';
import Types from './pages/Types';
import Building from './pages/Building';
import HomePage from './pages/HomePage';
import store from './store';
import { loadTypes } from './actions/typesAction';

store.dispatch(loadTypes());

const App = () => (
  <>
    <CustonNav />
    <div className="container pt-10">
      <Route path="/" exact component={HomePage} />
      <Route path="/types" exact component={Types} />
      <Route path="/building" exact component={Building} />
    </div>
  </>
);
export default App;
