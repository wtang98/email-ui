import React, { useState } from 'react'
import './main.scss'
import SideNav from './side-nav/side-nav'
import dummyemail from '../../assets/dummydata/email.js'
import dummyTrash from '../../assets/dummydata/trash.js'


const Main = () => {
    const [inboxArray, setInboxArray] = useState(dummyemail)
    const [trashArray, setTrashArray] = useState(dummyTrash)
    return (
        <div className='main'>
            <div className="main__sideNav">
                <SideNav inboxArray={inboxArray} trashArray={trashArray}/>
            </div>
            <div className="main__emailFeed">
                
            </div>
            <div className="main__emailContent">

            </div>
        </div>
    )
}

export default Main