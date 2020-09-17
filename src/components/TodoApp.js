import React, { useReducer, useEffect } from 'react';
import todoReducer from '../reducer/todoReducer';
import { useForm } from '../hooks/useForm';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
  const [stateTodos, dispatch] = useReducer(todoReducer, [], init);
  const [stateForm, handleInputChange, resetValues] = useForm({ description: '' });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(stateTodos));
  }, [stateTodos]);

  const handleDelete = id => {
    dispatch({
      type: 'delete',
      payload: id
    });
  };

  const handleToggle = id => {
    dispatch({
      type: 'toggle-mejorado',
      payload: id
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (stateForm.description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: stateForm.description,
      done: false
    };

    const addTodoAction = {
      type: 'add',
      payload: newTodo
    };

    dispatch(addTodoAction);

    resetValues();
  };

  return (
    <div>
      <h1>Todo App ({stateTodos.length})</h1>
      <hr />

      <div className="row">

        <div className="col-7">
          <ul className="list-group list-group-flush">
            {
              stateTodos.map((todo, i) => (
                <TodoList
                  key={i}
                  todo={todo}
                  handleToggle={handleToggle}
                  handleDelete={handleDelete}
                  i={i}
                />
              ))
            }
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />

          <TodoForm
            handleSubmit={handleSubmit}
            stateForm={stateForm}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;