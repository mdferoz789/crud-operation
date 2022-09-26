import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

function Create() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  // console.log(fName);
  // console.log(lName);
  const [set,getSet]=useState([]);
 const  url="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
 const apiCall= async()=>{
  await axios.get(url).then((res)=>{
    getSet(res.data);
    console.log(res.data)
  })
 }
 useEffect(()=>{
  apiCall();
 },[])
 console.log(set)
 

  return (
    // <div>
    //   <Form>
    //     <Form.Field>
    //       <label>First Name</label>
    //       <input
    //         name="fName"
    //         onChange={(e) => setFname(e.target.value)}
    //         placeholder="First Name"
    //       />
    //     </Form.Field>
    //     <Form.Field>
    //       <label>Last Name</label>
    //       <input
    //         name="lName"
    //         placeholder="Last Name"
    //         onChange={(e) => setLname(e.target.value)}
    //       />
    //     </Form.Field>
    //     <Form.Field>
    //       <Checkbox label="I agree to the Terms and Conditions" />
    //     </Form.Field>
    //     <Button type="submit">Submit</Button>
    //   </Form>
    // </div>
    <div>
      <h1>CRUD operations</h1>
      <table border="1">
        <tr>
          <td>DateTime</td>
          <td>open</td>
          <td>high</td>
          <td>low</td>
          <td>close</td>
          <td>volume</td>
        </tr>
        {/* {set.map((item)=>{
          <tr>
            <td>{} </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
        })} */}

      </table>
    </div>
  );
  }

export default Create;
