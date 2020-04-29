import React from 'react';
import { CardColumns } from 'react-bootstrap';
import { connect } from 'react-redux';
import PokemonTypeCard from '../components/PokemonTypeCard';
import '../assets/styles/App.scss';

const PokemonTypes = ({ pokemonTypes }) => (
  <>
    <h1>Pokemon Types</h1>
    <CardColumns>
      {
        pokemonTypes.map((pokemonType) => (
          <PokemonTypeCard
            name={pokemonType.name}
            url={pokemonType.url}
            key={pokemonType.name}
          />
        ))
      }
    </CardColumns>
  </>
);

const mapStateToProps = (state) => ({
  pokemonTypes: state.pokemonTypes,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonTypes);
