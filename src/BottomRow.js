import React from "react";
import "./App.css";

const BottomRow = (props) => {
  const {quarter} = props;
  return (
    <div className="bottomRow">
      <div className="toGo">
        <h3 className="toGo__title">Shot Clock</h3>
        <div className="toGo__value">24</div>
      </div>
      
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;