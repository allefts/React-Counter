import React from "react";
import "./App.css";
import CounterComponent from "./CounterComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countNum: 0 };
    this.onClick = this.onClick.bind(this);
  }

  onClick = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "+":
        this.setState({ countNum: this.state.countNum + 1 });
        break;
      case "-":
        this.setState({
          countNum: this.state.countNum - 1,
        });
        break;
      case "CE":
        this.setState({
          countNum: 0,
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <h2>Counter:</h2>
        <h3>{this.state.countNum}</h3>
        <CounterComponent onClick={this.onClick} />
        {/* The onClick function inside of the CounterComponent will have the value of what is passed inside of {} */}
      </div>
    );
  }
}

export default App;
