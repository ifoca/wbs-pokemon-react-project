import React from "react"
import logo from '../assets/poke-logo.png';
export default function Header(){
  const listBar = ["Home", "About","favorite"];
  
  return(
    <nav className="bg-red-500 py-3 flex items-center space-x-10 px-6">
       <ul className="flex justify-center items-center gap-10 font-bold text-1xl ml-10 ">
        {listBar.map((el) => (<li>{el}</li>))}
       </ul>

        <img src={logo} alt="" className=" h-10 w-auto ml-auto"/>
      </nav>

  )
}






{/*
 { const navClick =(onClick)=>{
    console.log(onClick);

  };
  return (
    <nav onClick= {(navClick)}className="bg-red-500 font-bold py-2.5 border border-gray-200 p-1 rounded">
      <ul className=" flex justify-end gap-5 flex-wrap">
        <li>Home</li>
        <li>About us</li>
        <li> favorite</li>
      </ul>
      <p></p>

      <nav>

      </nav>
    </nav>
  );
 }
*/}