import React, { useEffect, useState } from "react";
import {
  Link,
  BrowserRouter as Router,
  useLocation,
  Routes,
} from "react-router-dom";

const User = () => {
  const [userResource, setUserResource] = useState({
    name: "",
    username: "",
    email: "",
  });
  const id = useLocation().pathname.split("/")[2];

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUserResource(data);
      });
  }, [id]);

  return (
    <Router>
      <Routes>
        <div className="App">
          <p>Name : {userResource.name}</p>
          <p>User Name : {userResource.username}</p>
          <p>Email : {userResource.email}</p>

          <Link to="/users/1">Fetch User id 1</Link>
          <Link to="/users/2">Fetch User id 2</Link>
          <Link to="/users/3">Fetch User id 3</Link>
        </div>
      </Routes>
    </Router>
  );
};

export default User;
