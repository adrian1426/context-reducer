import React, { useReducer, useEffect } from 'react';
import todoReducer from '../reducer/todoReducer';
import { useForm } from '../hooks/useForm';
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
                <li key={todo.id} className="list-group-item">
                  <p className="text-center">{i + 1}. {todo.desc}</p>
                  <button className="btn btn-danger">Borrar</button>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Aprender ..."
              autoComplete="off"
              className="form-control"
              value={stateForm.description}
              onChange={handleInputChange}
            />

            <button
              className="btn btn-outline-primary mt-1 btn-block"
              type="submit"
            >
              Agregar
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;