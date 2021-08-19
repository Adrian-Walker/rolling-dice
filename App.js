import React, { Component } from "react"
import { render } from "react-dom";
import Dicebox from "./Dicebox";
import './index.css';
// import Dicebox from "./Dicebox";

class App extends Component {
  constructor() {
    super()
    this.state = {
      dice1: "/Users/adrianwalker/V-School/Level-3/rolling-dice/src/dice/dice-1.png",
      dice2: "/Users/adrianwalker/V-School/Level-3/rolling-dice/src/dice/dice-2.jpeg",
      dice3: "/Users/adrianwalker/V-School/Level-3/rolling-dice/src/dice/dice-3.png",
      dice4: "/Users/adrianwalker/V-School/Level-3/rolling-dice/src/dice/dice-4.png",
      dice5: "/Users/adrianwalker/V-School/Level-3/rolling-dice/src/dice/dice-5.png",
      dice6: "/Users/adrianwalker/V-School/Level-3/rolling-dice/src/dice/dice-6.png"
    }
  }

  render() {

    return (
      <div className="App">
        <Dicebox />
      </div>
    )

  }
}



export default App;
