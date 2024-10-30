import "./App.css";
import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./component/login.jsx";
import Profile from "./component/profile.jsx";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>Using of CONTEXT API IN REACT</h1>
        <Login />
        <Profile/>
      </UserContextProvider>
    </>
  );
}

export default App;
