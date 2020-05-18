import React from "react";

const TodoForm = (props) => {
  return (
    <div className="formDiv">
      <form onSubmit={props.handleSubmit}>
        <label className="label">Todo</label>
        <br />
        <input
          type="text"
          value={props.todoInput}
          name="todoInput"
          onChange={props.handleTodoChange}
          className="input"
        ></input>
        <br />
        <label className="label">Priority</label>
        <br />
        <input
          type="text"
          value={props.priorityInput}
          name="priorityInput"
          onChange={props.handlePriorityChange}
          className="input"
        ></input>
        <br />
        <label className="label">Duration</label>
        <br />
        <input
          type="text"
          value={props.durationInput}
          name="durationInput"
          onChange={props.handleDurationChange}
          className="input"
        ></input>
        <br />
        <button type="submit" className="label">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
