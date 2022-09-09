import logo from "./logo.svg";
import "./App.css";
import Feroz from "./component/Feroz";
import ClassUser from "./component/ClassUser";
import { UseStaComp } from "./component/UseStaComp";
import countOccurrences from "./component/Matrix";
import React, { useEffect, useState } from "react";
import Callback from "./Callback";

function App() {
  const [UIcolor, setUIcolor] = useState(null);
  const getColor = (color) => {
    setUIcolor(color);
  };
  // const [set,getSet]=useState(0);
  // const[isSt,isStt]=useState(false)
  // useEffect(()=>{
  //   const a=setTimeout(()=>{
  //     getSet(set+1);
  //   },1000);
  //   return()=>{
  //     // clearInterval(clearInterval);
  //   }
  // })
  // function Apple() {
  //   return <h1>Apple component</h1>;
  // }
  console.log("parent");
  return (
    <div className="App">
      <div className="App_color" style={{ background: `${UIcolor} ` }}></div>
      <Callback getColor={getColor} />
      <h1>Hello welcome feroz</h1>
      {/* <marquee  >This is basic example of marquee</marquee> */}
      {/* <marquee direction="up">
        The direction of text will be from bottom to top
      </marquee>
      <marquee  ><img className="pic"  src={logo}></img> </marquee> */}
      {/* <Feroz/> */}
      {/* <ClassUser/> */}
      {/* {Apple()} */}
      {/* <Apple/> */}
      {/* <UseStaComp/> */}
      {/* <countOccurrences /> */}
      {/* <h1>{set}</h1> */}
      <input type="text" placeholder={UIcolor} />
      
    </div>
  );
}

export default App;
