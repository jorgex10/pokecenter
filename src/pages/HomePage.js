import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import '../assets/styles/App.scss';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <Jumbotron className="container mt-10">
    <h1>Hello, mate!</h1>
    <p>
      This is a simple Pokemon center information, a clasic web page to get
      extra attention to featured content or information related about Pokemons.
    </p>
    <p>
      <Link to="/pokemon-types">
        <Button variant="primary">Go to see all types of pokemos</Button>
      </Link>
    </p>
  </Jumbotron>
);

export default HomePage;
