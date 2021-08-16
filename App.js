import React, { Component } from "react"
import Dicebox from "./Dicebox";
import './index.css';
// import Dicebox from "./Dicebox";

class App extends Component {
  constructor() {
    super()
    this.state = {
      dice1: 0,
      dice2: 0,
      dice3: 0,
      dice4: 0,
      dice5: 0
    }
  }
}

function App() {
  return (
    <div className="App">
      <Dicebox />
    </div>
  );
}

export default App;
