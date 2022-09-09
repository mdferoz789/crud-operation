import React, { useState } from "react";
import "./App3.css";

export default function App3() {
  const [show, setShow] = useState(true);
  const [val, setVal] = useState("");
  const [value, setValue] = useState("");

  //   console.log(show, "sss");
  //   console.log(setShow, "tttset");
  return (
    <div>
      <h1>App3</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide below Element" : "Show the Element"}{" "}
      </button>
      {show && <h2>Toggle Challenge HIde n Seek</h2>}
      <input
        type="text"
        placeholder="Enter name"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <p>{val}</p>
      ----------------------
      <h3>Disable Button Challenge</h3>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button disabled={value.length < 1}> SUBMIT </button>
      <br />
      <button hidden={value.length < 3}> SUBMIT2 after 3 char </button>
      -----------------------------
    </div>
  );
}

export function Parent() {
  const [value, setValue] = useState("i need to be updated from my child");

  return (
    <div>
      <h4>Update Parent State Challenge (Using Callback)</h4>
      <div className="wrapper">
        <h3>Parent</h3>
        <div className="box-wrapper">{value} </div>
      </div>
      <div className="wrapper">
        <Child setValue={setValue} />
      </div>
    </div>
  );
}
function Child({ setValue }) {
  return (
    <div>
      <h3>Child</h3>
      <button onClick={() => setValue("PArent Has been Updated")}>
        Click for change Parent Value
      </button>
    </div>
  );
}
