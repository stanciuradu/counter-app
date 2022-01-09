import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      backgroundColor: "white",
    };
  }
  handleIncrementButton() {
    this.setState({ counter: this.state.counter + 1 });
  }
  handleDecrementButton() {
    if (this.state.counter === 0) {
      return this.state.counter;
    } else {
      return this.setState({ counter: this.state.counter - 1 });
    }
  }
  handleChangeBackgroundColor(event) {
    const newBackgroundColor = event.target.value;
    this.setState({ backgroundColor: newBackgroundColor });
  }
  render() {
    return (
      <div
        className="App"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <button
          type="button"
          className="decrement"
          onClick={() => this.handleDecrementButton()}
        >
          Decrement (-)
        </button>
        <h1>{this.state.counter}</h1>
        <button
          type="button"
          className="increment"
          onClick={() => this.handleIncrementButton()}
        >
          Increment (+)
        </button>
        <input
          type="color"
          onChange={(event) => this.handleChangeBackgroundColor(event)}
        />
      </div>
    );
  }
}

export default App;
