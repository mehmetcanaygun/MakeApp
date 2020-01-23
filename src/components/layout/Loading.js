import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <div className="animation-wrapper">
        <div className="lipstick">
          <div className="top"></div>
          <div className="middle"></div>
          <div className="bottom"></div>
        </div>
        <div className="lipstick-mark"></div>
      </div>
    </div>
  );
};

export default Loading;
