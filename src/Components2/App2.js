import React, { useState } from "react";
import "./App2.css";

export default function App2() {
  const [count, setCount] = useState(0);
  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 },
    {name:"feroz", id:4}
  ];
  const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);  
console.log(users,"users==>")
console.log(userItems,"items==>")
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCount(count + 1)}>INcrement</button>
      <h2>Counter:</h2>
      <h2 className="h2">{count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      -----------------
      <h3>User names</h3>
      <ul>{userItems}</ul>
      --------------------------
    </div>
  );
}
