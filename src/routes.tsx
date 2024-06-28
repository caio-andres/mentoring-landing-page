import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mentoria from "./pages/Mentoring/index.tsx";

import Error from "./pages/Error/index.tsx";

import Header from "./components/Header/index.tsx";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Mentoria />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
