import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import AI from "./components/AI";
import Talk from "./components/Talk";
import Login from "./components/Login";
import Register from "./components/Register";
import Journal from "./components/Journal";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "75px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Journal" element={<Journal />} />
          <Route path="/ai" element={<AI />} />
           <Route path="/talk" element={<Talk />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
