import React from "react";
import styles from '../Header/Header.css'


function Header () {
   return (
     <div className="container">
       <div className="nav-bar">
         <h1>logo</h1>
          <ul className="nav-bar-links">
          <li>Home</li>
          <li>Sobre</li>
           <li>Bolos</li>
         </ul>
       </div>
     </div>
   )
}

export default Header;