// import React from "react";
// import ReactDOM from "react-dom";

const names = ["whale", "squid", "turtle", "coral", "starfish"];

const NamesList = () =>
  console.log(
    <ul>
      {names.map((name) => (
        <li key={name}> {name} </li>
      ))}
    </ul>
  );

// const rootElement = document.getElementById("root");
// ReactDOM.render(<NamesList />, rootElement);
