import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import '../assets/styles/App.scss';
import { Link } from 'react-router-dom';

const Building = () => (
  <Jumbotron className="container mt-10">
    <h1>Page is being building!</h1>
    <p>
      This is a simple template, that indicates this web section is being building.
      Please visit another pages.
    </p>
    <p>
      <Link to="/">
        <Button variant="primary">Go to Home</Button>
      </Link>
    </p>
  </Jumbotron>
);

export default Building;
