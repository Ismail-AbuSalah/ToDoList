import React, { Component } from "react";
// import "./App.css";

export default class ToDoItem extends Component {
  render() {
    const { num, oneTask, delTask, comTask } = this.props;
    return (
      <div className="App-ToDoItem">
        <p className={oneTask.isCompleted?"com":"notcom"}>
          {num}-{oneTask.title}
        </p>
        <button onClick={delTask.bind(this, num)}>Delete</button>
        <button onClick={comTask.bind(this, num)}>comp</button>
      </div>
    );
  }
}
