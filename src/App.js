import { Main, Test, Test1, Test2 } from "./components";
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
          <Route path="/test" element={<Test />}></Route>
          <Route path="/test1" element={<Test1 />}></Route>
          <Route path="/test2" element={<Test2 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
