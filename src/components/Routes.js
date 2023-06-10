import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main.js";
import NotFound from "./pages/NotFound.js";
import Dashboard from "./pages/Dashboard.js"


function AppRoutes() {
      return (
      <Routes>
        <Route element={<Main/>} path="/" exact/>
        <Route element={<Dashboard/>} path="/dashboard"/>
        <Route path="*" element={<NotFound/>} />            
    </Routes>
    );
  }
  
  export default AppRoutes;