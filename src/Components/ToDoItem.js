import React, { Component } from "react";
// import "./App.css";

export default class ToDoItem extends Component {
  render() {
    const{num, oneTask, delTask}=this.props
    return (
      <div className="App-ToDoItem">
        {num}-{oneTask.title}
        <button onClick={delTask.bind(this,num)}>Delete</button>
      </div>
    );
  }
}
