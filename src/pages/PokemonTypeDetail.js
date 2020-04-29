import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadPokemonType } from '../actions/pokemonTypesAction';

const PokemonTypeDetail = ({ match, asd, poketype }) => {
  useEffect(() => asd(), []);

  return (
    <>
      <h1>Pokemon Type Detail Page</h1>
      <p>{match.params.name}</p>
      {
        poketype
        && poketype.pokemon
        && poketype.pokemon.map((pokemon) => {
          const pokemonName = pokemon.pokemon.name;
          return (<p key={pokemonName}>{pokemonName}</p>);
        })
      }
    </>
  );
};

const mapStateToProps = (state, props) => ({
  poketype: state.pokemonTypes.find((pokeType) => pokeType.name === props.match.params.name),
});

const mapDispatchToProps = (dispatch, props) => ({
  asd() {
    dispatch(loadPokemonType(props.match.params.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonTypeDetail);
