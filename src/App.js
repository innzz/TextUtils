import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

let heading = "Enter your text"; 

function App() {
  const [Mode,SetMode] = useState('light');
  const [modeText,setModeText] = useState('Enable Dark Mode');
  const [alertMessage,setalertMessage] = useState(null);

  const showAlertMessage = (message,type)=>{
    setalertMessage(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setalertMessage(null);
    },3000);
  }

  const toggle = ()=>{
    if (Mode === 'light') {
      SetMode('dark');
      setModeText('Disable Dark Mode');
      showAlertMessage('Dark Mode enabled','success');
      document.body.style.backgroundColor = '#0e132e';
    }
    else
    {
      SetMode('light');
      setModeText('Enable Dark Mode');
      showAlertMessage('Dark Mode disabled','success');
        document.body.style.backgroundColor = 'white';
      }
  };

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" about = "About Us" mode={Mode} toggle={toggle} modeText = {modeText}/>
    <Alert alertMessage = {alertMessage} setalertMessage={setalertMessage}/>
        <div className="container">
      <Routes>
        <Route exact path="/" element={<TextForm heading={ heading } mode={Mode} showAlert = { showAlertMessage }/>} />
        <Route exact path="/About" element={<About mode={Mode}/>} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
