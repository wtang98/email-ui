import React, {useState} from 'react'
import './emailFeed.scss'
import EmailFeedItem from './emailFeedItem/emailFeedItem'
import Filters from '../../../assets/icons/filters.png'
import FilterMenu from './filterMenu/filterMenu'

const EmailFeed = ({orignalUrgentArray, originalUrgentTrashArray, showingInbox, handleSortByDate, filterUrgentMail, displayTheEmailToRead}) => {
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
            {showingInbox ? 
                orignalUrgentArray.map((arr) => {
                    return <EmailFeedItem displayTheEmailToRead={displayTheEmailToRead} id={arr.id} read={arr.read} urgent={arr.urgent} sender={arr.sender} email={arr.email} subject={arr.subject} message={arr.message} date={arr.date} picture={arr.picture}/>
                }) : 
                originalUrgentTrashArray.map((arr) => {
                    return <EmailFeedItem displayTheEmailToRead={displayTheEmailToRead} id={arr.id} read={arr.read} urgent={arr.urgent} sender={arr.sender} email={arr.email} subject={arr.subject} message={arr.message} date={arr.date} picture={arr.picture}/>
                })
            }
            {/* {} */}
        </div>
    )
}

export default EmailFeed