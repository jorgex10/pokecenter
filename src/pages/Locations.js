import React from 'react';
import { CardColumns } from 'react-bootstrap';
import LocationCard from '../components/LocationCard';
import '../assets/styles/App.scss';

const Building = () => {
  const locations = [
    {
      name: 'canalave-city',
      url: 'https://pokeapi.co/api/v2/location/1/',
    },
    {
      name: 'eterna-city',
      url: 'https://pokeapi.co/api/v2/location/2/',
    },
    {
      name: 'pastoria-city',
      url: 'https://pokeapi.co/api/v2/location/3/',
    },
    {
      name: 'sunyshore-city',
      url: 'https://pokeapi.co/api/v2/location/4/',
    },
    {
      name: 'sinnoh-pokemon-league',
      url: 'https://pokeapi.co/api/v2/location/5/',
    },
  ];

  return (
    <>
      <h1>Locations</h1>
      <CardColumns>
        {
          locations.map((location) => (
            <div>
              <LocationCard name={location.name} url={location.url} />
            </div>
          ))
        }
      </CardColumns>
    </>
  );
};

export default Building;
