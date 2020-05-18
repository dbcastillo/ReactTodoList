import React, { Component } from "react";

export default class UpdateForm extends Component {
  state = {};
  componentDidMount() {
    this.setState({
      ...this.props.todo,
    });
  }
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  handlePriorityChange = (e) => {
    this.setState({ priority: e.target.value });
  };
  handleDurationChange = (e) => {
    this.setState({ duration: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateTodo(this.state);
    this.props.isFlipped();
  };
  render() {
    return (
      <div className="updateFormDiv">
        <form onSubmit={this.handleSubmit}>
          <label className="label">Todo</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.handleTitleChange}
            className="input"
          ></input>
          <br />
          <label className="label">Priority</label>
          <br />
          <input
            type="text"
            value={this.state.priority}
            name="priority"
            onChange={this.handlePriorityChange}
            className="input"
          ></input>
          <br />
          <label className="label">Duration</label>
          <br />
          <input
            type="text"
            value={this.state.duration}
            name="duration"
            onChange={this.handleDurationChange}
            className="input"
          ></input>
          <br />
          <button type="submit" className="label">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
