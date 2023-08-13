import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Publier from "./pages/Publier";
import Moderer from "./pages/Moderer";
import Admin from "./pages/Admin";
// import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redact/publier" element={<Publier />} />
        <Route path="/moder/moderer" element={<Moderer />} />
        <Route path="/admin/administrer" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
