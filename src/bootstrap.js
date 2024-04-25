// src/bootstrap.js
import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./MyComponent";

(function () {
  const targetId = "my-react-component"; // The ID of the DOM element where the React component will mount.

  document.addEventListener("DOMContentLoaded", function () {
    const rootElement = document.getElementById(targetId);
    if (rootElement) {
      ReactDOM.render(<MyComponent />, rootElement);
    } else {
      console.error(`No element with id '${targetId}' found in the document.`);
    }
  });
})();
