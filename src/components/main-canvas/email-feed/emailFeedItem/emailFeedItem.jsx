import React from 'react'
import './emailFeedItem.scss'

const EmailFeedItem = ({arrayUsed, displayTheEmailToRead, selectedId, id, read, urgent, sender, email, subject, message, date, picture}) => {
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const getInitials = () => {

    }

    return (
        <div className={`emailFeedItem ${selectedId ===id && 'selectedEmail'}`} onClick={()=>(displayTheEmailToRead(arrayUsed, id))}>
            <div className="emailFeedItem__right">
                {picture? <img src={picture} alt="" />: <div>{}</div> }
            </div>
            <div className="emailFeedItem__left">
                <div className="emailFeedItem__left-line1">
                    <p className="emailFeedItem__left-line1-name">
                        {sender}
                    </p>
                    <p className="emailFeedItem__left-line1-date">
                        <p>{`${monthArr[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`}</p>
                    </p>
                </div>
                <div className="emailFeedItem__left-line2">
                    <p className={`${read ? 'readP' : 'unreadP'}`}>{subject}</p>
                </div>
                <div className="emailFeedItem__left-line3">
                    {message}
                </div>
            </div>
            {read ? <div className='read'></div>: <div className='unread'></div>}
        </div>
    )
}

export default EmailFeedItem