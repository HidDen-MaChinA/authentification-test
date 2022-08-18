import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Global from "./components/Global";
import Login from './components/authentification/Login';
import {auth} from "./conf/firebase";
function App(){
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/Login"} />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/Home" element={<Global />} />
      </Routes>
    </Router>
  </>
  );
}
export default App;
