import React, { Component } from "react";
// import "./App.css";

export default class NewItem extends Component {
  render() {
    return (
      <div className="App-NewItem">
        <input placeholder="ToDo Title" />
        <button>Add</button>
      </div>
    );
  }
}
