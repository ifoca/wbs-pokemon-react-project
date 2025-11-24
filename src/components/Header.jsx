import React from "react"
import logo from '../assets/poke-logo.png';

function Header (){
  const listBar = ["Home", "About","favorite"];
  
  return(
    <nav className="bg-red-500  flex items-center space-x-15 px-6 py-4">
     <div className="flex justify-between items-center w-full">
      <div className=""> 
        <img src={logo} alt="" className=" h-10 w-auto ml-auto flex "/>
      </div>
      
       <ul className=" flex justify-center items-end gap-20 font-bold text-1xl ml-10">

        {listBar.map((el) => (<li key={el} onClick={()=> console.log(el)} className="cursor-pointer gap-3">{el}</li>))}
      </ul>
      </div>
      </nav>

  )

}
export default Header;
