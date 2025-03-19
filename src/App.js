//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
export default function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743'
    showAlert("Dark mode has been enabled","success")
  }
  else {
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled","success")
  }}
 
  return (
    <>
   <Router>
<Navbar title="Texting" mode={mode}  toggleMode={toggleMode}/>
<Alert alert={alert}></Alert>
<div className="container">
<Routes>
          <Route path="/about" element={<About mode={mode}  toggleMode={toggleMode} />}>
            
          </Route>
          
          <Route path="/" element ={<Textform showAlert={showAlert} heading = "Write the text to Anaylse" mode={mode}/>}> 
          
            
          </Route>
  </Routes>


</div>
</Router>
    </>
  );
}
