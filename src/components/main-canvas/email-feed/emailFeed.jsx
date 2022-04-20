import React, {useState} from 'react'
import './emailFeed.scss'
import EmailFeedItem from './emailFeedItem/emailFeedItem'
import Filters from '../../../assets/icons/filters.png'
import FilterMenu from './filterMenu/filterMenu'

const EmailFeed = ({emailFeed, handleSortByDate, filterUrgentMail, displayTheEmailToRead}) => {
    const [menuState, setMenuState] = useState(false)
    
    return (
        <div className='emailFeed'>
            <div className="emailFeed__buttons">
                <button className="emailFeed__buttons-compose">Compose +</button>
                <button className="emailFeed__buttons-filter" onClick={()=>{setMenuState(!menuState)}}>
                    Filter By
                    <img src={Filters} alt="" />
                </button>
                {menuState && <FilterMenu filterUrgentMail={filterUrgentMail} handleSortByDate={handleSortByDate}/>}
            </div>
            {emailFeed.map((arr, index) => {
                return <EmailFeedItem index={index} displayTheEmailToRead={displayTheEmailToRead} read={arr.read} urgent={arr.urgent} sender={arr.sender} email={arr.email} subject={arr.subject} message={arr.message} date={arr.date} picture={arr.picture}/>
            })}
        </div>
    )
}

export default EmailFeed