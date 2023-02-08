import React from "react";
import './AppGuide.css'

function AppGuide({ guide }) {
  return (
    <div 
    className="appGuide-wrapper"
    >
      <div
        className="appGuide"
        style={{
          display: guide ? "block" : "none",
          opacity: guide ? "1" : "0",
          transition: "all 0.5s",
        }}
      >
        <h2 className="appGuide-title">Guide for contributing</h2>
        <p className="appGuide-details">
          Your code must be simple and clear enough. If it is not simple, it is
          not needed! Simplicity is our core value.
        </p>
      </div>
    </div>
  );
}
export default AppGuide;