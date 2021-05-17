import React from 'react';
import './header.styles.scss';
import logo from '../../../stuff/tzy-logo.jpg';

const Header = () => {
    return (
        <div className = 'header'>
            <img alt = "legendeus logo" className='logo' src ={logo}></img>
        </div>
    )
}
export default Header;