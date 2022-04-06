import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';

let heading = "Enter your text"; 

function App() {
  return (
    <>
    <Navbar title="TextUtils" about = "About Us" />
    <div className="container">
      <TextForm heading={ heading }/>
    <About/>
    </div>
    </>
  );
}

export default App;
