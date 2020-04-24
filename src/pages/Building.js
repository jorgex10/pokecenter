import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import '../assets/styles/App.scss';

const Building = () => (
  <Jumbotron className="container mt-10">
    <h1>Page is being building!</h1>
    <p>
      This is a simple template, that indicates this web section is being building.
      Please visit another pages.
    </p>
    <p>
      <Button variant="primary">Go to Home</Button>
    </p>
  </Jumbotron>
);

export default Building;
