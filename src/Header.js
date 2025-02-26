import React from "react";
import logo from "./assets/download.png";



function Header() {
  return (
  <header class="header">
    <img src={logo} alt='Restaurent logo' width="auto" height="auto"/>
    <h1>Welcome to Little Lemon Restaurent</h1>
    </header>
    );
}

export default Header;
