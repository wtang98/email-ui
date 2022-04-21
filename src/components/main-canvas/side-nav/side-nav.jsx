import React from 'react'
import './side-nav.scss'
import Trash from '../../../assets/icons/trash.png'
import Email from '../../../assets/icons/email.png'

const SideNav = ({showingInbox, originalArray, originalTrashArray, showInbox, showTrash}) => {

    return (
        <div className='sideNav'>
            <div className="sideNav__contents">
                <div className={`sideNav__contents-inbox ${showingInbox ? 'selected' : ''}`} onClick={showInbox}>
                    <div className="sideNav__contents-inbox-left">
                        <img className='email' src={Email} alt="" />
                        <p className={`${showingInbox  ? 'selectedP' : ''}`}>Inbox</p>
                    </div>
                    <div className="sideNav__contents-inbox-items">
                        {originalArray.length}
                    </div>
                </div>
                
                <div className={`sideNav__contents-trash ${showingInbox  ? '' : 'selected'}`} onClick={showTrash}>
                    <div className="sideNav__contents-trash-left">
                        <img className='trash' src={Trash} alt="" />
                        <p className={`${showingInbox  ? '' : 'selectedP'}`}>Trash</p>
                    </div>
                    <div className="sideNav__contents-trash-items">
                        {originalTrashArray.length}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav