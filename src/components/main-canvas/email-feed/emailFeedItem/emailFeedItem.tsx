import React, { useState, useEffect} from 'react'
import './emailFeedItem.scss'

type dataObj= {
    'id': number;
    'read': boolean;
    'urgent': boolean;
    'sender': string;
    'email': string;
    'subject': string;
    'message': string;
    'date': Date;
    'picture': string;
    'inTrash': boolean
}

interface Props {
    arrayUsed: Array<dataObj>;
    displayTheEmailToRead: (arrayUsed:Array<dataObj>, idNo:number) => void;
    selectedId: number;
    id: number;
    read: boolean;
    urgent: boolean;
    sender: string;
    email: string;
    subject: string;
    message: string;
    date: Date;
    picture: string;
}
//urgent, sender, email, subject, message, date, picture
const EmailFeedItem:React.FC<Props> = ({arrayUsed, displayTheEmailToRead, selectedId, id, read, urgent, sender, email, subject, message, date, picture}) => {
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const [initials, setinitials] = useState('')
    useEffect(()=> {
        let inits= '';
        if(picture === ''){
            let nameArr = sender.split(" ")
            for(let i=0; i<nameArr.length; i++){
                inits += nameArr[i][0]
            }
        }
        setinitials(inits)
    })

    return (
        <div className={`emailFeedItem ${selectedId ===id && 'selectedEmail'}`} onClick={()=>(displayTheEmailToRead(arrayUsed, id))}>
            <div className="emailFeedItem__right">
                {picture? <img src={picture} alt="" />: <div className='initials'>{initials}</div> }
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