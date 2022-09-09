import React, { useState } from "react";
// import axios from "axios";

// export default function App8Api() {
//   const [set, getSet] = useState([]);
//   const callApi = async () => {
//     await axios.get("https://reqres.in/api/users?page=1").then((res) => {
//       getSet(res.data.data);
//       console.log(res.data.data);
//     });
//   };

//   return <div></div>;
// }

const url = "https://jsonplaceholder.typicode.com/users";
/** 
  // Sample Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/
export default function App8Api() {
  const [userData, setUserData] = React.useState([]);

  const getUserData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData);
    console.log(userData, "==");
  };

  React.useEffect(() => {
    getUserData();
  }, []);
  console.log(userData, "==>");

  return (
    <div className="App">
            {userData.map((post) => {
         return (
          <>
                         <p className="post-body">{post.body}</p>

          </>)})}
      <h2>User Data</h2>

      <p>
        <strong>Name:</strong> {userData.name}
        <br />
        <strong>Name1:</strong> {userData.name}
      </p>
      <p>
        <strong>Website:</strong> {userData.website}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Phone:</strong> {userData.phone}
      </p>
    </div>
  );
}
