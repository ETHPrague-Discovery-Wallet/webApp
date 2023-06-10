import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main.js";
import NotFound from "./pages/NotFound.js";
import Create from "./pages/Create.js"


function AppRoutes() {
      return (
      <Routes>
        <Route element={<Main/>} path="/" exact/>
        <Route element={<Create/>} path="/create"/>
        <Route path="*" element={<NotFound/>} />            
    </Routes>
    );
  }
  
  export default AppRoutes;