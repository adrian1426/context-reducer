import { agregarTodo } from './todoTypes';
import { agregarTodoAction } from './todoAction';

const initialState = [{
  id: 1,
  todo: 'Hacer ejercicio',
  done: false
}];

const todoReducer = (state = initialState, action) => {
  switch (action?.type) {
    case agregarTodo:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};

let todos = todoReducer();



const newTodo = {
  id: 2,
  todo: 'hacer tarea de matematicas',
  done: false
};


todos = todoReducer(todos, agregarTodoAction(newTodo));


console.log(todos);