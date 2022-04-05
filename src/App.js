import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';

let heading = "Enter your text"; 

function App() {
  return (
    <>
    <Navbar title="TextUtils" about = "About Us" />
    <div className="container">
      <TextForm heading={ heading }/>
    </div>
    </>
  );
}

export default App;
