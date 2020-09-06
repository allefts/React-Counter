import React from "react";

class CounterComponent extends React.Component {
  clickHandler(event) {
    event.preventDefault();
    console.log(event.target.name);
    this.props.onClick(event.target.name);
  }

  render() {
    return (
      <div>
        <form>
          <button name="+" onClick={this.props.onClick}>
            {/* (e) => this.props.onClick(e.target.name) */}+
          </button>
          <button name="-" onClick={this.props.onClick}>
            -
          </button>
          <button name="CE" onClick={this.props.onClick}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}

export default CounterComponent;
