import React from 'react'
import './side-nav.scss'
import Trash from '../../../assets/icons/trash.png'
import Email from '../../../assets/icons/email.png'

const SideNav = () => {
    return (
        <div className='sideNav'>
            <div className="sideNav__contents">
                <div className="sideNav__contents-inbox">
                    <div className="sideNav__contents-inbox-left">
                        <img className='email' src={Email} alt="" />
                        <p>Inbox</p>
                    </div>
                    <div className="sideNav__contents-inbox-length">
                        
                    </div>
                </div>
                
                <div className="sideNav__contents-trash">
                    <div className="sideNav__contents-trash-left">
                        <img className='trash' src={Trash} alt="" />
                        <p>Trash</p>
                    </div>
                    <div className="sideNav__contents-trash-length">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav