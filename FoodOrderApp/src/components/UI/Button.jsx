import React from "react";

const Button = ({ children, textOnly, className, ...props }) => {
  let buttonStyle = textOnly ? "text-button" : "button";
  buttonStyle += className ? " " + className : "";
  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
