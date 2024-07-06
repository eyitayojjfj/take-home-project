import { useState } from "react";
import CustomButton from "./component/CustomButton"
import { MdNavigateNext } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import {  } from "react";

function App() {
  
  return (
    <>
    <div className="hero">
     <h1>Button Component</h1>
     </div>
     <div className="container">
     <nav  bgColor="lightgray">
      <ul>
        <li>Colors</li>
        <li>Typography</li>
        <li>Spaces</li>
        <li>Buttons</li>
        <li className="spoil">Inputs</li>
        <li>Grid</li>
      </ul>
      </nav>
     </div>

    <div className="boat">
    <div>
    <CustomButton bgColor="lightgray" txColor="black"></CustomButton>
    <CustomButton bgColor="darkgray" txColor="black"></CustomButton>
    </div>
    <div>
    <CustomButton bgColor="white" txColor="blue" btnBorder="2px solid blue"></CustomButton>
    <CustomButton bgColor="aquablue" txColor="blue" btnBorder="2px solid blue"></CustomButton>
    </div>
     <div>
      <CustomButton bgColor="white" txColor="blue"></CustomButton>
      <CustomButton bgColor="aquablue" txColor="blue" >
        {" "}
        Default
       <span>
      <MdNavigateNext />
      </span>
      </CustomButton >
      </div>
      <CustomButton  bgColor="blue" txColor="white"></CustomButton>
      <div>
      <CustomButton bgColor="lightgrey" txColor="grey">Disabled</CustomButton>
      <CustomButton bgColor="white" txColor="grey">Disabled</CustomButton>
     </div>

     <div>
      <CustomButton bgColor="blue" txColor="white"> {" "}Default <span> <MdAddShoppingCart />
      </span></CustomButton>
      <CustomButton bgColor="blue" txColor="white"> {" "}Default <span> <MdAddShoppingCart />
      </span></CustomButton>
     </div>

     <div>
     <CustomButton bgColor="blue" txColor="white"></CustomButton>
     <CustomButton bgColor="blue" txColor="white"></CustomButton>
     <CustomButton bgColor="blue" txColor="white"></CustomButton>
     </div>

     <div>
     <CustomButton bgColor="grey" txColor="darkgrey"></CustomButton>
     <CustomButton bgColor="lightblue" txColor="white"></CustomButton>
     <CustomButton bgColor="teal" txColor="white">Secondary</CustomButton>
     <CustomButton bgColor="red" txColor="white">Danger</CustomButton>
     </div>

     <div>
     <CustomButton bgColor="grey" txColor="lightgrey"></CustomButton>
     <CustomButton bgColor="blue" txColor="white"></CustomButton>
     <CustomButton bgColor="darkolivegreen" txColor="white">Secondary</CustomButton>
     <CustomButton bgColor="darkred" txColor="white">Danger</CustomButton>
     </div>
     </div>
    </>
  )
}

export default App
