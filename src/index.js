////Ex(On-Off)
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

//method01( without making variable)
const Room = () => {
  const [isLit, setLit] = useState("true");

  return (
    <>
      <h1>The On-Off Programe!</h1>
      <div className={`room ${isLit ? "Lit" : "dark"}`}>
        <div className="main">

          <h2>The Room is {isLit ? "Lit" : "dark"}!</h2>
    
          <div className="but">
            <FontAwesomeIcon
              className="on"
              icon={faPowerOff}
              color="green"
              onClick={() => setLit(true)}
            />
        <br/>

            <FontAwesomeIcon
              className="off"
              icon={faPowerOff}
              color="red"
              onClick={() => setLit(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

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

ReactDOM.render(<Room />, document.querySelector("#root"));
