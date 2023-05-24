import React, { Component } from "react";
import TouchTypingBox from "../TouchTypingBox";

import "./index.css";

class TouchTypingApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedKeys: "",
      nextKeys: "",
      accuracy: 0,
      currentKeyIndex: 0,
    };
  }
  handleInputChange = (e) => {
    this.setState({ typedKeys: e.target.value });
  };

  handleCheck = () => {
    const { typedKeys, nextKeys } = this.state;

    let accuracy = 100;

    // If the typed keys are empty, show an alert to enter keys
    if (typedKeys.trim() === "") {
      alert("Please enter keys");
      return;
    }

    for (let i = 0; i < typedKeys.length; i++) {
      if (typedKeys[i] !== nextKeys[i]) {
        accuracy -= 1;
      }
    }

    this.setState({ accuracy });

    // If typed keys and next keys are equal, empty the input box and generate new keys
    if (typedKeys === nextKeys) {
      this.setState({ typedKeys: "", nextKeys: "" });
      this.showNextKey(nextKeys);
    }
  };

  startPractice = () => {
    // Generate random next keys for practice
    const possibleKeys = "asdfjkl;";
    let generatedKeys = "";
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * possibleKeys.length);
      generatedKeys += possibleKeys[randomIndex];
    }
    this.setState({
      nextKeys: generatedKeys,
      typedKeys: "",
      currentKeyIndex: 0,
    });
  };

  showNextKey = (index) => {
    const { nextKeys } = this.state;
    if (index < nextKeys.length) {
      const nextKey = nextKeys[index];
      this.setState({ currentKeyIndex: index + 1, typedKeys: nextKey });
    } else {
      this.setState({ typedKeys: "" });
      this.startPractice();
    }
  };

  render() {
    const { typedKeys, nextKeys, accuracy } = this.state;
    const showAccuracy = `Accuracy: ${accuracy}%`;

    return (
      <div className="container">
        <div className="box-container">
          <h1 className="heading">
            Touch Typing <span>Practice</span>
          </h1>
          <button className="button" onClick={this.startPractice}>
            Start Practice
          </button>
          <TouchTypingBox
            typedKeys={typedKeys}
            onChange={this.handleInputChange}
            onCheck={this.handleCheck}
          />
          <div className="keys-container">
            <p className="p"> {nextKeys}</p>
          </div>
          <p className="paragraph">{showAccuracy}</p>
          <p className="description">
            *Click on 'Start Practice' to start typing and click 'Check Here'
            for results.
          </p>
        </div>
      </div>
    );
  }
}

export default TouchTypingApp;
