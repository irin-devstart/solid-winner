import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./case/User";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
