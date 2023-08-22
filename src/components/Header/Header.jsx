import "./Header.css"
import logo from "../../assets/logo.svg"
import Shape from "../../assets/Shape.svg"
import Group1 from "../../assets/Group1.png"



import React from 'react'
import { NavLink, Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
        <div className="container">
        <div className="header__container container">

            {/* <Link className="" to="#" ></Link> */}
            <Link className="site-logo" to="/" >
            <img src={Group1} alt="Site logo" className="site-g" width="16" height="15" />
                <img src={logo} alt="Site logo" className="site-logo__img" width="143" height="25" /></Link>
            <nav className="sitenav">
                <ul className="sitenav-list">
                    <li className="sitenav-item"><NavLink className="sitenav-link" to="/"> Home</NavLink></li>
                    <li className="sitenav-item"><NavLink className="sitenav-link" to="/speakers"> Speakers</NavLink></li>
                    <li className="sitenav-item"><NavLink className="sitenav-link" to="/headphone">Headphone</NavLink></li>
                    <li className="sitenav-item"><NavLink className="sitenav-link" to="/earphone">Earphone</NavLink></li>
                </ul>
            </nav>
            <button className="header-btn">
                <img className="header-btn__img" src={Shape} alt="" width="23" height='20' />
            </button>
        </div>
        <hr className="hr" />
        </div>
    </header>
  )
}

export default Header
        // <nav>
        //     <NavLink to='/'>Home</NavLink>
        //     <NavLink to='/speakers'>Speakers</NavLink>
        //     <NavLink to='/headphone'>Headphone</NavLink>
        //     <NavLink to='/earphone'>Earphone</NavLink>
        // </nav>