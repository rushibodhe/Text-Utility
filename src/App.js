import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (alertType, message) => {
    setAlert({
      alert: alertType,
      msg: message
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }



  const toggleSwitch = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#07316f";
      showAlert("success", "Dark mode has been enabled")
    }

    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode has been enabled")
    }
  }


  return (
    <>
      <Router>
        <Navbar title="Text Utility" about="About" mode={mode} toggleSwitch={toggleSwitch} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path='/' element={<TextForm heading="Enter text" showAlert={showAlert} mode={mode} />} />
            <Route path='/about' element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;



