import React, { useReducer } from 'react';
import todoReducer from '../reducer/todoReducer';
import './styles.css';

const initialState = [{
  id: new Date().getTime(),
  desc: 'Aprender reducer y context',
  done: false
}];

const TodoApp = () => {
  const [state] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h1>Todo App</h1>
      <hr />

      <ul>
        <li>Adrian</li>
        <li>Hugo</li>
        <li>Pancho</li>
      </ul>
    </div>
  );
};

export default TodoApp;