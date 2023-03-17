
import './App.css';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from './components/pages/Grid';
import {} from "mdb-react-ui-kit";

function App() {



  return (
    <>
    <Router>
      
       <Routes>
       <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/grid" element={<Grid />} />
        </Routes>
       

    </Router>
    
    
    </>
  );
}

export default App;
