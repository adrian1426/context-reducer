const appReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENTAR':
      return {
        ...state,
        count: state.count + 1,
        title: action.payload.title
      };
    case 'DECREMENTAR':
      return {
        ...state,
        count: state.count - 1,
        title: action.payload.title
      };
    default:
      return state;
  }
};

export default appReducer;