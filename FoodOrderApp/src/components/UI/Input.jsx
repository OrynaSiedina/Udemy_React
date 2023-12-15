import React from "react";

const Input = ({id, lable,...props}) => {
  return (
    <p className="control">
      <lable htmlFor={id}>{lable}</lable>
      <input id={id} name = {id} required {...props} />
    </p>
  );
};

export default Input;
