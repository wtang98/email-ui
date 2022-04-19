import React from 'react'
import './emailFeed.scss'
import EmailFeedItem from './emailFeedItem/emailFeedItem'

const EmailFeed = ({showArray}) => {
    // console.log(showArray[0].read)
    return (
        <div className='emailFeed'>
            {showArray.map(arr => {
                return <EmailFeedItem read={arr.read} sender={arr.sender}/>
            })}
        </div>
    )
}

export default EmailFeed