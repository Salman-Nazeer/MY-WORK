import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const login = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <>
      <div>
        <h2>LogIn</h2>
        <input
          type="text"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
          placeholder="Enter your Name"
        />

        <br />
        <br />

        <input
          type="text"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter password"
        />

        <br />
        <br />

        <button onClick={handleSubmit}>Submit</button>

      </div>
    </>
  );
};

export default login;
