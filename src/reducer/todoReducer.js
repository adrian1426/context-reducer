const todoReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]
    case 'delete':
      return state.filter(todo => todo.id !== action.payload);
    case 'toggle':
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          };
        } else {
          return todo;
        }
      });
    case 'toggle-mejorado':
      return state.map(todo => (todo.id === action.payload ?
        { ...todo, done: !todo.done }
        : todo
      ));
    default:
      return Object.assign([], state);
  }
};

export default todoReducer;