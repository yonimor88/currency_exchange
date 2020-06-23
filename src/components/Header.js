import React from 'react'
import logo from './logo.png';

function Header() {
    return (
        <div>
           <img src={logo} className="Header-logo" alt="logo" />
            <p>  By Jonathan Mordecayov</p>
        </div>
    )
}

export default Header
