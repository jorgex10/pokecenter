import axios from 'axios';

const loadTypes = () => (dispatch) => axios.get('https://pokeapi.co/api/v2/type/').then((response) => {
  dispatch({
    type: 'LOAD_TYPES',
    types: response.data.results,
  });
});

export { loadTypes };
