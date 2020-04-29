const pokemonTypesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TYPES':
      return action.types;
    case 'LOAD_TYPE': {
      const poketypeName = state.findIndex((type) => type.name === action.pokeType.name);
      return [...state.slice(0, poketypeName), action.pokeType, ...state.slice(poketypeName + 1)];
    }
    default:
      return state;
  }
};

export default pokemonTypesReducer;
