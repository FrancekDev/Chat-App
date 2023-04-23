import React, { useState } from "react";
import "./App.scss";

import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  const [username, setUsername] = useState();

  const onUsername = (username1) => {
    setUsername(username1);
  };

  return (
    <Routes>
      <Route
        exaxt
        path="/"
        render={() => {
          window.location.href = "/";
          return null;
        }}
        element={<Login onUsername={onUsername} />}
      />
      <Route path="/chat" element={<Home username={username} />} />
    </Routes>
  );
}

export default App;
