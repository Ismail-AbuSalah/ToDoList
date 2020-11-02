import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
// import "./App.css";

export default class ToDoList extends Component {
  render() {
      const {delTask,taskArr}=this.props
    return (
      <div className="App-ToDoList">
        {taskArr.map((elemnt, index) => (
          <ToDoItem
            key={index}
            oneTask={elemnt}
            num={index}
            delTask={delTask}
          />
        ))}
      </div>
    );
  }
}
