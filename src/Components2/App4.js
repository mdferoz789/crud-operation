import React, { useState } from "react";

export default function App4() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [total, totalNum] = useState(0);
  const [value, setValue] = useState(0);
  function Calculation() {
    // console.log(total);
    totalNum(num1 + num2);
  }
  //   console.log(num1);
  //   console.log(num2);
  //   console.log(total);

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input
        type="text"
        placeholder="First Number"
        value={num1}
        onChange={(e) => setNum1(+e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Second Number"
        value={num2}
        onChange={(e) => setNum2(+e.target.value)}
      />
      <button onClick={Calculation}>Add Two Numbers</button>
      <p>Total:{total || ""} </p>
      <button onClick={() => setValue(value + 1)}>++INCREMENT</button>
      <br /> <h5>{value} </h5>
      <button disabled={value <= 0} onClick={() => setValue(value - 2)}>
        --DECREMENT
      </button>
    </div>
  );
}
