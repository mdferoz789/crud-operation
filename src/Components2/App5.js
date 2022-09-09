import React, { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com/users/1";

export default function App5() {
  const [userData, setUserData] = useState({});
  const getUserData = async () => {
    const response = await fetch(url);
    const jsondata = await response.json();
    setUserData(jsondata);
    console.log(response);
    console.log(jsondata);
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <h2>USER DATA</h2>
      <p>
        <strong>Name</strong> :{userData.name}{" "}
      </p>
      <p>
        <strong>Email:</strong>
        {userData.email}{" "}
      </p>
      <p>
        <strong>Phone:</strong>
        {userData.phone} <br />
      </p>
      <p>
        <strong>Website:</strong>
        {userData.website}{" "}
      </p>
    </div>
  );
}
