import React from 'react'
import Logo from '../firstRectangleContainer/logo/logo'
import './header.css'


function Header() {
    return (
        <header className="header">
            <Logo />
            <div className="contacts">
                <span  className="contacts__text"><p>Our services</p></span>
                <span className="contacts__img" />
                <span  className="contacts__text"><p>+ 1234 123 234 </p></span>
            </div>
        </header >
    )
}

export default Header