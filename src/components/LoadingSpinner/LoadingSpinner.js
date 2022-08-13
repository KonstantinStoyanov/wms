import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <h3>
        <div className="loading-spinner"></div>
        Loading...
      </h3>
    </div>
  );
}
