import React from 'react';

const TodoForm = (props) => {
  const { handleSubmit, stateForm, handleInputChange } = props;

  return (
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
  );
};

export default TodoForm;