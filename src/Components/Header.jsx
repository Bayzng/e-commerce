import React from 'react'
import logo from "../Assets/Screenshot_2023-04-29_at_07.12.39-removebg-preview.png"
import { AiOutlineShopping } from "react-icons/ai"
import { Link } from "react-router-dom";
import  { useState } from "react";
import { SidebarData } from './SliderBarData';
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import './Header.css'
import './Navbar.css'


const Header = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='container'>
        <div className="logo">
            <img src={logo} alt="" />
            <span className='dlt'>MY_<span className='afr'>FASHION</span></span>
        </div>

        
        <div className='right'>
            <div className="menu">
                <ul className='menu'>
                  <li>Collection</li>
                  <li>Brand</li>
                  <li>New</li>
                  <li>Sales</li>
                  <li>ENG</li>
                </ul>
            </div>
        


            <input type="text" className='search' placeholder='Search' />

            <AiOutlineShopping className="cart"/>
        </div>

    {/* sidebat */}

    <div className='mynav'>
      <IconContext.Provider value={{ color: "#FFF" }}>
          {/* All the icons now are white */}
          <div className="navbar">
           
              <FaIcons.FaBars onClick={showSidebar} />
           
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
              
                  <AiIcons.AiOutlineClose />
              
              </li>

              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                   
                      {item.icon}
                      <span>{item.title}</span>
                 
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
    </div>

    </div>
  )
}

export default Header