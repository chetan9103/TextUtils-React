import React from 'react'

export default function About(props) {
    // const[mode,setMode]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const[light,dark]=useState('Enable dark mode')
    // const changeMode=()=>{
    //     if(mode.color==='white'){
    //         setMode({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         dark('enable dark mode')
    //     }
    //     else{
    //         setMode({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         dark('enable light mode')

    //     }

    // }
  return (
    <div className="container"   style={{color:props.theme==="light"?"black":"white"}}>
        <h1>About us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={{backgroundColor:props.theme==="light"?"white":"grey",color:props.theme==="light"?"black":"white"}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={{backgroundColor:props.theme==="light"?"white":"grey",color:props.theme==="light"?"black":"white"}} >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={{backgroundColor:props.theme==="light"?"white":"grey",color:props.theme==="light"?"black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.theme==="light"?"white":"grey",color:props.theme==="light"?"black":"white"}} >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={{backgroundColor:props.theme==="light"?"white":"grey",color:props.theme==="light"?"black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.theme==="light"?"white":"grey",color:props.theme==="light"?"black":"white"}} >
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  {/* <div>
    <button type="button" className="btn btn-primary my-3" onClick={changeMode} >{light}</button>
  </div> */}
</div>
    </div>
  )
}

