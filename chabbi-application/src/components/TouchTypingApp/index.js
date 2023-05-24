import React, { useState } from "react";
import TouchTypingBox from "../TouchTypingBox";
import NextKeysDisplay from "../NextKeysDisplay";

import "./index.css";

const TouchTypingApp = () => {
  const [typedKeys, setTypedKeys] = useState("");
  const [nextKeys, setNextKeys] = useState("");
  const [accuracy, setAccuracy] = useState(100);

  const handleInputChange = (event) => {
    const typedValue = event.target.value;
    setTypedKeys(typedValue);

    // Compare typed keys with next keys and calculate accuracy
    const correctKeys = nextKeys.slice(0, typedValue.length);
    const newAccuracy = Math.floor(
      (correctKeys.length / typedValue.length) * 100
    );
    setAccuracy(newAccuracy);
  };

  // Function to start the 5-minute practice window
  const startPractice = () => {
    // Generate random next keys for practice
    const possibleKeys = "asdfjkl;";
    let generatedKeys = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * possibleKeys.length);
      generatedKeys += possibleKeys[randomIndex] + " ";
    }
    setNextKeys(generatedKeys);
    setTypedKeys("");
    setAccuracy(100);
  };

  return (
    <div className="container">
      <div className="box-container">
        <h1 className="heading">
          Touch Typing
          <span> Practice</span>
        </h1>
        <button className="button" onClick={startPractice}>
          Start Practice
        </button>
        <TouchTypingBox
          typedKeys={typedKeys}
          handleInputChange={handleInputChange}
        />
        <div className="keys-container">
          <NextKeysDisplay nextKeys={nextKeys} />
        </div>
        <p className="paragraph">Accuracy: {accuracy}%</p>
      </div>
    </div>
  );
};

export default TouchTypingApp;
