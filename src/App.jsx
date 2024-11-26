import React from "react";
import Gameplay from "./pages/Gameplay";
import Mainpage from "./pages/Mainpage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Gameplay />} />
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    </>
  );
};

export default App;
