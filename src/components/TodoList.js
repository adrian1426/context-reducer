import React from 'react';

const TodoList = (props) => {

  const { todo, handleToggle, handleDelete, i } = props;
  return (
    <li className="list-group-item">
      <p
        className={`text-center ${todo.done && 'complete'}`}
        onClick={() => handleToggle(todo.id)}
      >
        {i + 1}. {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Borrar</button>
    </li>
  );
};

export default TodoList;