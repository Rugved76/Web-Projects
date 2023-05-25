import React, { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#282828';
      showAlert("Dark mode enabled", "success");
      document.title = 'TextUtils - Dark mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = 'TextUtils - Light mode';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>
      <AboutUs mode={Mode}/>
    </>
  );
}

export default App;
