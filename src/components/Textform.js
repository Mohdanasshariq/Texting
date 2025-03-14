import React,{useState} from 'react';



export default function Textform(props) {
    const handleUpClick=()=>{
      let newText=text.toUpperCase()
      setText(newText)
    }
    const handleLowClick=()=>{
      let newText=text.toLowerCase()
      setText(newText)
    }
    const handleOnChange =(event)=>{
      setText(event.target.value)
    }

    const [text,setText]=useState('');
    
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
     <div className="mb-3">
     
     <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>

     <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lower Case</button>
    </div>
    <div className='conatainer m-3'>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
