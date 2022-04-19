import React from 'react'
import './emailFeedItem.scss'

const EmailFeedItem = ({read, urgent, sender, email, subject, message, date, picture}) => {

    return (
        <div className='emailFeedItem'>
            <div className="emailFeedItem__right">
                <img src='' alt="" />
            </div>
            <div className="emailFeedItem__left">
                <div className="emailFeedItem__left-line1">
                    
                </div>
                <div className="emailFeedItem__left-line2">

                </div>
                <div className="emailFeedItem__left-line3">

                </div>
            </div>
        </div>
    )
}

export default EmailFeedItem