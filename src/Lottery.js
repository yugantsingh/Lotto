import React, { Component } from "react";
import Ball from "./Ball.js";
import "./Lottery.css";

export default class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);
    this.state = { num: Array.from({ length: this.props.maxBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    this.setState((st) => ({
      num: st.num.map((n) => Math.floor(Math.random() * this.props.maxNum) + 1),
    }));
  }
  handleClick() {
    this.generate();
  }
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.num.map((n) => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}
