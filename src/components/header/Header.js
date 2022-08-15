import logo from "./logo.png"
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import React, { useState } from 'react';
import "./header.css"

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState (false)
    const Menu = () => (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#about">What is Sol Battle?</a></p>
            <p><a href="#gameplay">Gameplay</a></p>
            <p><a href="https://mishmishmuga.gitbook.io/sol-battle/">Whitepaper</a></p>
        </>
    )
    return (
        <nav>
            <div className='nav-container'>
                <div className='nav-logo'>
                    <img alt="" src={logo} className="nav-logo-image rotate-center"></img>
                </div>
                <div className="nav-links">
                <Menu />
                </div>
                <div className="nav-menu">
                    {toggleMenu
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenuLine color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                        <div className="nav-menu-container scale-up-center">
                            <Menu />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Header