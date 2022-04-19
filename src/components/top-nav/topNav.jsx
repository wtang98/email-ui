import React from 'react'
import './topNav.scss'
import Logo from '../../assets/photos/Logo.png'
import ProfilePic from '../../assets/photos/ProfilePic.png'
import VectorDown from '../../assets/icons/VectorDown.png'
const TopNav = () => {
    return (
        <div className='topNav'>
            <div className="topNav__logo">
                <img src={Logo} alt="" />
                <p className="topNav__logo-p1">Relay</p>
                <p className="topNav__logo-p2">.io</p>
            </div>
            <div className="topNav__right">
                <img className="topNav__right-img" src={ProfilePic} alt="" />
                <img className="topNav__right-icon" src={VectorDown} alt="" />
            </div>
        </div>
    )
}

export default TopNav