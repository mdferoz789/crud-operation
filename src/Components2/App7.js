import React, { useState } from "react";

export default function App7() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  function signUp() {
    let item = { name, pass, email };
    console.warn(item);
  }

  return (
    <div className="col-sm-12 offset-sm-3">
      <h1>User Sign up</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
      />{" "}
      <br />
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
      />
      <br />
      <button className="btn btn-primary" onClick={signUp}>
        Sign Up
      </button>
    </div>
  );
}
