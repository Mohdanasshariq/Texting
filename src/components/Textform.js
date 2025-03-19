import React,{useState} from 'react';



export default function Textform(props) {
    const handleUpClick=()=>{
      let newText=text.toUpperCase()
      setText(newText)
      props.showAlert("Converted to Upper Case","success")
    }
    const handleLowClick=()=>{
      let newText=text.toLowerCase()
      setText(newText)
      props.showAlert("Converted to Lower Case","success")
    }
    const handleClick=()=>{
      let newText=("")
      setText(newText)
      props.showAlert("Text Cleared","success")
    }
    const handleOnChange =(event)=>{
      setText(event.target.value)
    }

    const [text,setText]=useState('');
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
     <div className="mb-3">
     
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
     </div>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper Case</button>

     <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to lower Case</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClick}>Clear Text</button>
    </div>
    <div className='conatainer m-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    </div>
    </>
  )
}
