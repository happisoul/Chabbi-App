import React from "react";

import "./index.css";

const TouchTypingBox = ({ typedKeys, handleInputChange }) => {
  return (
    <input
      placeholder="Type or Practice Here"
      className="input"
      type="text"
      value={typedKeys}
      onChange={handleInputChange}
    />
  );
};

export default TouchTypingBox;
