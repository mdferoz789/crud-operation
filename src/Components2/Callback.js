import React, { useState } from "react";

export default function Callback({ getColor }) {
  const [actColor, setActcolor] = useState(null);
  const handleChange = (e) => {
    const { value } = e.target;
    setActcolor(value);
    getColor(value);
  };
  console.log("CHILD");

  return (
    <input
      type="text"
      name=""
      id="input"
      aria-label="input"
      onChange={handleChange}
      value={actColor}
    />
  );
}
