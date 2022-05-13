import React from "react";

import "./index.scss";

const GradientButton = ({ children, long, className, type, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      className={`font-xs uppercase rounded-md main-button ${
        long && "main-button-long"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default GradientButton;
