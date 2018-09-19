import React from "react"
import Navbar from "./navbar"
import LogoImage from './../../images/hero-logo.png'

const Header = () => {

    return (
      <header class="page-section">
          <div className="headerContent container">
            <img className="logo" src={LogoImage}  alt="Pumba logo"/>
            <Navbar/>
          </div>
      </header>
    )
}


export default Header