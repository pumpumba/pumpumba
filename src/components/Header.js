import React from "react"
import Navbar from "./navbar"
import LogoImage from './../../images/hero-logo.png'

const Header = () => {

    return (
      <header>
          <div className="headerContent"> 
            <img className="logo" src={LogoImage}  alt="Pumba logo"/>
            <Navbar/>
          </div>
      </header>
    )
}


export default Header
