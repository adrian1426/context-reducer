import { agregarTodo } from './todoTypes';

export const agregarTodoAction = payload => ({
  type: agregarTodo,
  payload
})