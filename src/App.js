//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
   
<Navbar title='Textutils'/>
<div className="container">
<Textform heading = "Write the text to Anaylse"/>
</div>

    </>
  );
}

export default App;
