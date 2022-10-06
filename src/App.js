import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    </Router>
  </>
  );
}

export default App;
