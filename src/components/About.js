import React from 'react'

export default function About(props) {
  //   const [myStyle,setMyStyle]=useState(
  //   {
  //       color:'black',
  //       backgroundColor:'white'
  //   })
  //   const [btntext,setbtnText]=useState('Enable Dark Mode')
   let myStyle={
       color:props.mode==='dark'?'white':'#042743',
       backgroundColor:props.mode==='dark'?'rgb(36 74 104':'white',
       
    }
  
  return (
    <div className='container '  /*style={myStyle}*/>
        <h2 className='m-3'style={{color:props.mode==='dark'?'white':'#042743'}} >About Us </h2>
        <div className="accordion" id="accordionExample" style={myStyle} /*style={myStyle}*/>
         <div className="accordion-item">
          <h2 className="accordion-header">
          <button className="accordion-button" type="button" style={myStyle}  /*style={myStyle}*/ data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>About Texting</strong>
          </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body"style={myStyle}  /*style={myStyle}*/>
          <strong>Texting gives you a way to analyse your text quickly and efficiently.Be it word count or characters , you can also change your text to uppercase or lower case completely.</strong>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle}  /*style={myStyle}*/ type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle} /*style={myStyle}*/>
        <strong>Texting is a free application by which you can count your words or character instantly. And you can also convert your text to uppercase or case in one click.</strong>
      </div>
    </div>
  </div>
 
</div>
{/* <div className="container m-3">
<button /*onClick={toggleStyle} type="button" className="btn btn-primary"> {btntext} </button> 
</div>*/}
    </div>
  )
}
