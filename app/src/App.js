import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import Contactpage from "./Pages/ContactPage/Contactpage";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
