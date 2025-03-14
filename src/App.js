//import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
   
<Navbar title='Textutils'/>
<div className="container">
<Textform heading = "Write the text to Anaylse"/>
{/*<About/>*/}
</div>

    </>
  );
}

export default App;
