import axios from 'axios';

const loadPokemonTypes = () => (dispatch) => axios.get('https://pokeapi.co/api/v2/type/').then((response) => {
  dispatch({
    type: 'LOAD_TYPES',
    types: response.data.results,
  });
});

const loadPokemonType = (name) => (dispatch) => axios.get(`https://pokeapi.co/api/v2/type/${name}`).then((response) => {
  dispatch({
    type: 'LOAD_TYPE',
    pokeType: response.data,
  });
});

export { loadPokemonTypes, loadPokemonType };
