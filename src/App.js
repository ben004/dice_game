import React, { Component } from "react";
import _ from "lodash";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      human: 0,
      Artifical: 0,
      Win: 0,
      Lose: 0,
      Draw: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let d = this.state.Draw;
    let l = this.state.Lose;
    let w = this.state.Win;
    let Human = _.random(1, 6);
    let ai = _.random(1, 6);
    if (Human === ai) d = d + 1;
    else if (Human > ai) w++;
    else l++;
    this.setState({
      human: Human,
      Artifical: ai,
      Win: w,
      Lose: l,
      Draw: d,
    });
  }
  clear() {
    this.setState({
      human: 0,
      Artifical: 0,
      Win: 0,
      Lose: 0,
      Draw: 0,
    });
  }
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      margin: "10px",
    };
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button style={mystyle} onClick={() => this.handleClick()}>
            Play Game
          </button>
          <br />
          <br />
          <br />
          <button style={mystyle} onClick={(e) => this.clear(e)}>
            Reset
          </button>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Human: {this.state.human}
        </div>
        <br />
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          AI:{this.state.Artifical}
        </div>
        <br />
        <br /><div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
      <label>Win : </label>{this.state.Win}
      Lose : {this.state.Lose}
      Draw : {this.state.Draw}
      </div>
        <br />
        <br />
      </div>
    );
  }
}
