import React from "react";
import Todos from "./Todos";
import TodoForm from "./TodoForm";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [],
    todoInput: "",
    priorityInput: "",
    durationInput: "",
    addTodo: false,
    updateTodo: false,
  };

  todoInput = () => {
    return this.state.todoInput;
  };

  priorityInput = () => {
    return this.state.priorityInput;
  };

  durationInput = () => {
    return this.state.durationInput;
  };

  handleTodoChange = (e) => {
    this.setState({ todoInput: e.target.value });
  };

  handlePriorityChange = (e) => {
    this.setState({ priorityInput: e.target.value });
  };

  handleDurationChange = (e) => {
    this.setState({ durationInput: e.target.value });
  };

  handleDelete = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, { method: "DELETE" });

    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });

    alert("CONGRATS ON ACCOMPLISHING THIS TODO!");
  };

  handleAddSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: this.state.todoInput,
        priority: this.state.priorityInput,
        duration: this.state.durationInput,
      }),
    })
      .then((response) => response.json())
      .then((todo) => {
        this.setState({
          todos: [...this.state.todos, todo],
        });
      });
    this.setState({
      todoInput: "",
      priorityInput: "",
      durationInput: "",
      addTodo: false,
    });
    alert("Todo successfully created!");
  };

  componentDidMount = () => {
    fetch("http://localhost:3001/todos")
      .then((response) => response.json())
      .then((todos) => {
        todos.sort((a, b) => a.id - b.id);
        this.setState({ todos: todos });
      });
  };

  toggleAddTodo = () => {
    this.state.addTodo
      ? this.setState({ addTodo: true })
      : this.setState({ addTodo: true });
  };

  toggleUpdateTodo = () => {
    this.setState({ updateTodo: true });
  };

  updateTodo = (updatedTodo) => {
    fetch(`http://localhost:3001/todos/${updatedTodo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: updatedTodo.title,
        priority: updatedTodo.priority,
        duration: updatedTodo.duration,
      }),
    })
      .then((response) => response.json())
      .then((newTodo) => {
        const newTodoState = this.state.todos.filter((todo) => {
          return todo.id !== newTodo.id;
        });
        newTodoState.push(newTodo);
        newTodoState.sort((a, b) => a.id - b.id);
        this.setState({
          ...this.state,
          todos: newTodoState,
        });
      });
  };

  render() {
    return (
      <div>
        <h1 className="app-title">TODO LIST</h1>
        <div className="button">
          <button onClick={this.toggleAddTodo} className="addTodo">
            <h5>Add Todo</h5>
          </button>
        </div>
        {this.state.addTodo ? (
          <TodoForm
            todoInput={this.todoInput()}
            priorityInput={this.priorityInput()}
            durationInput={this.durationInput()}
            handleTodoChange={this.handleTodoChange}
            handlePriorityChange={this.handlePriorityChange}
            handleDurationChange={this.handleDurationChange}
            handleSubmit={this.handleAddSubmit}
          />
        ) : null}
        <div className="container">
          {this.state.todos.map((todo) => (
            <Todos
              updateTodo={(newState) => this.updateTodo(newState)}
              todo={todo}
              handleDelete={this.handleDelete}
              key={todo.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
