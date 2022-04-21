import React from 'react'
import './emailContent.scss'
import ThreeDots from '../../../assets/icons/3dots.png'
import Reply from '../../../assets/icons/reply.png'
import BlueTrash from '../../../assets/icons/bluetrash.png'
import Left from '../../../assets/icons/chevron-left.png'
import Right from '../../../assets/icons/chevron-right.png'


const EmailContent = ({displayEmailMessage, goBack, goForward}) => {
    return (
        <div className='emailContent'>
            <div className="emailContent__container">
                <div className="emailContent__container-topBar">
                    <div className="emailContent__container-topBar-left">
                        <div className="emailContent__container-topBar-left-img">
                            {displayEmailMessage.picture != undefined && <img src={displayEmailMessage.picture} alt="" />}
                        </div>
                        <div className="emailContent__container-topBar-left-details">
                            <p>{displayEmailMessage.sender}</p>
                            <p>{displayEmailMessage.email}</p>
                        </div>
                    </div>
                    <div className="emailContent__container-topBar-right">
                        <img src={ThreeDots} alt="" />
                        <img src={Reply} alt="" />
                        <img src={BlueTrash} alt="" />
                    </div>
                </div>
                <div className="emailContent__container-message">
                    <div className="emailContent__container-message-subject">
                        {displayEmailMessage.subject}
                    </div>
                    <div className="emailContent__container-message-main">
                        {displayEmailMessage.message}
                    </div>
                </div>
                <div className="emailContent__container-cycleBar">
                    <img src={Left} alt="" onClick={goBack} />
                    <img src={Right} alt="" onClick={goForward}/>
                </div>
            </div>
        </div>
    )
}

export default EmailContent