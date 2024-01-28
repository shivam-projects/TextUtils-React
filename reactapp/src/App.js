import React, { useState } from 'react';
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForms from './Component/TextForms';
import Alert from './Component/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, status) => {
    setAlert({
      msg: message,
      type: status,
    });
  };

  setTimeout(() => {
    setAlert(null);
  }, 3000);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtlis - Dark mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtlis - Light mode';
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact
              path="/"
              element={
                <TextForms
                  heading="Enter text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
