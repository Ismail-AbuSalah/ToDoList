import React, { Component } from "react";
import "./App.css";
import NewItem from "./Components/NewItem";
import ToDoList from "./Components/ToDoList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: "eat", isCompleted: false },
        { title: "play", isCompleted: false },
        { title: "work", isCompleted: false },
      ],
    };
  }

  delTask=(num,ev) =>{
    // const newArr=[...this.state.tasks]
    console.log(this.state);
    console.log(ev.target);
    // console.log(ev);
    console.log(num);
    // console.log(this.state.tasks.splice(num, 1));
    this.setState(this.state.tasks.splice(num, 1))

    
  }
  render() {
    return (
      <div className="App">
        <NewItem />
        <ToDoList taskArr={this.state.tasks} delTask={this.delTask} />
      </div>
    );
  }
}
