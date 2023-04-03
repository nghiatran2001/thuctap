import { Main } from "./components";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
