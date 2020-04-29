import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PokemonTypeCard = ({ name }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{name.toUpperCase()}</Card.Title>
      <Link to={`/pokemon-types/${name}`}>Go to details</Link>
    </Card.Body>
  </Card>
);

export default PokemonTypeCard;
