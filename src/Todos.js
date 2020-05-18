import TodoForm from "./TodoForm";
import React, { Component } from "react";
import UpdateForm from "./UpdateForm";
import ReactCardFlip from "react-card-flip";

export default class Todos extends Component {
  state = {
    isFlipped: false,
  };
  toggleUpdate = () => {
    this.setState({
      isFlipped: !this.state.isFlipped,
    });
  };
  render() {
    const todo = this.props.todo;
    return (
      <div>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
          flipSpeedFrontToBack={0.91}
          flipSpeedBackToFront={0.91}
        >
          <div>
            <div className="single-card" key={todo.id}>
              <br />
              <button
                className="deleteButton"
                onClick={() => this.props.handleDelete(todo.id)}
              >
                delete
              </button>
              <h2>Todo: {todo.title}</h2>
              <br />
              <h2>Priority: {todo.priority}</h2>
              <br />
              <h2>Duration: {todo.duration}</h2>
              <br />
              <div className="button">
                <button
                  onClick={() => this.toggleUpdate()}
                  className="updateTodo"
                >
                  Update Todo
                </button>
              </div>
            </div>
          </div>
          <div>
            <UpdateForm
              isFlipped={this.toggleUpdate}
              todo={this.props.todo}
              updateTodo={(newState) => this.props.updateTodo(newState)}
            />
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}
