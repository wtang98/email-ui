import React, { useState, useEffect } from 'react'
import './main.scss'
import SideNav from './side-nav/side-nav'
import dummyemail from '../../assets/dummydata/email.js'
import dummyTrash from '../../assets/dummydata/trash.js'
import EmailFeed from './email-feed/emailFeed'


const Main = () => {
    const [showingInbox, setShowingInbox] = useState(true)
    const [inboxArray, setInboxArray] = useState(dummyemail)
    const [trashArray, setTrashArray] = useState(dummyTrash)
    const [showArray, setShowArray] = useState(inboxArray)
    const showInbox = () => {
        setShowingInbox(true)
    }
    const showTrash = () => {
        setShowingInbox(false)
    }
    useEffect(()=> {

    },[])
    return (
        <div className='main'>
            <div className="main__sideNav">
                <SideNav showingInbox={showingInbox} inboxArray={inboxArray} trashArray={trashArray} showInbox={showInbox} showTrash={showTrash}/>
            </div>
            <div className="main__emailFeed">
                <EmailFeed showArray={showArray}/>
            </div>
            <div className="main__emailContent">

            </div>
        </div>
    )
}

export default Main