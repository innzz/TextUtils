import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import React, {useState} from 'react'

let heading = "Enter your text"; 

function App() {
  const [Mode,SetMode] = useState('light');

  const toggle = ()=>{
    console.log('toggle func');
      if (Mode === 'light') {
        SetMode('dark');
        document.body.style.backgroundColor = '#0e132e';
      }
      else
      {
        SetMode('light');
        document.body.style.backgroundColor = 'white';
      }
  };

  return (
    <>
    <Navbar title="TextUtils" about = "About Us" mode={Mode} toggle={toggle}/>
    <div className="container">
      <TextForm heading={ heading } mode={Mode}/>
    <About mode={Mode}/>
    </div>
    </>
  );
}

export default App;
