import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import Team from './components/pages/Team';
import SignUp from './components/pages/SignUp';
import Service from './components/pages/Service';
import SignIn from './components/pages/SignIn';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
const [currentForm, setCurrentForm] = useState('login');
 const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
  <>
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/services" element={<Service />}></Route>
    <Route path="/team" element={<Team />}></Route>
    <Route path="/sign-up" element={<SignUp />}></Route>
    <Route path="/sign-in" element={<SignIn />}></Route>
  </Routes>
    </Router>

    <div className="App">
      {
        currentForm === "login" ? <SignIn onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }
    </div>
  </>
  );
}

export default App;
