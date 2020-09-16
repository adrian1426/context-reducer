import React, { useReducer } from 'react';
import todoReducer from '../reducer/todoReducer';
import './styles.css';

const initialState = [{
  id: new Date().getTime(),
  desc: 'Aprender reducer y context',
  done: false
}];

const TodoApp = () => {
  const [stateTodos] = useReducer(todoReducer, initialState);

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

          <form>
            <input
              type="text"
              name="description"
              placeholder="Aprender ..."
              autoComplete="off"
              className="form-control"
            />

            <button className="btn btn-outline-primary mt-1 btn-block">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;