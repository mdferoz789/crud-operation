import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

function Create() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  console.log(fName);
  console.log(lName);
  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            name="fName"
            onChange={(e) => setFname(e.target.value)}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lName"
            placeholder="Last Name"
            onChange={(e) => setLname(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Create;
