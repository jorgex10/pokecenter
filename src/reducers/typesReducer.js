const typesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TYPES':
      return action.types;
    default:
      return state;
  }
};

export default typesReducer;
