import React from "react";

const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
    />
  );
};

export default Input;
