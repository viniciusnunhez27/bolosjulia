import React from "react";
import styles from '../Header/Header.css'
import Logo from  "../../assets/logo.png"


function Header () {
   return (
    <div className="grid">
     <div className="container">
       <div className="nav-bar">
         <img src={Logo} alt="" />
          <ul className="nav-bar-links">
          <li>Home</li>
          <li>Sobre</li>
           <li>Bolos</li>
         </ul>
       </div>
      </div>
     </div>
   )
}

export default Header;