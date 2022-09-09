import React, { Component } from "react";
export default class ClassUser extends Component {
  constructor() {
    super();
    this.state = {
      data: "feroz",
    };
  }
  apple() {
    // this.setState((data: "kkkkk"));
  }

  render() {
    return (
      <>
        <h1>Hello class componet</h1>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}>class button</button>
      </>
    );
  }
}
