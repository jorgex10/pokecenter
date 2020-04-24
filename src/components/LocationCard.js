import React from 'react';
import { Card } from 'react-bootstrap';

const LocationCard = ({ name, url }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Link href={url}>Go to details</Card.Link>
    </Card.Body>
  </Card>
);

export default LocationCard;
