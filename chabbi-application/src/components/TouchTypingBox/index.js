import React from "react";

import "./index.css";

class TouchTypingBox extends React.Component {
  render() {
    const { typedKeys, onChange, onCheck } = this.props;

    return (
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Type or Practice Here"
          value={typedKeys}
          onChange={onChange}
        />
        <button className="btn" onClick={onCheck}>
          Results
        </button>
      </div>
    );
  }
}

export default TouchTypingBox;
