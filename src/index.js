  ////Ex(On-Off)
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import './style.css';


//method01( without making variable)
   const Room=()=> {
    const [Lit, setLit] = useState("OFF");  

    return (
        <>
        <h1>The On-Off Programe!</h1>
      <div className="main">
        <h2 >Light is {Lit}!</h2>

      <button type="button" onClick={() => setLit("ON")} >ON</button> 
        <br/>
         <button type="button" onClick={() => setLit("OFF")}>OFF</button>  

      </div>
      </>
    )
  }

//method02(with veriable)
// const Room=()=>{
//   const[Lit , setLit]=useState("OFF");

//   const open=()=>{
//     setLit("ON")
//   }
//   const close=()=>{
//     setLit('OFF')
//   }

//   return(
//   <div>
//     <h1>light is{Lit}</h1>
//  <button onClick={open}>ON</button>
//  <button onClick={close}>OFF</button>
//   </div>
//   )
// }
   
ReactDOM.render(<Room  />, document.querySelector("#root"));
