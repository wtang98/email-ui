import React, {useEffect, useState} from 'react'
import './emailFeed.scss'
import EmailFeedItem from './emailFeedItem/emailFeedItem'
import Filters from '../../../assets/icons/filters.png'
import FilterMenu from './filterMenu/filterMenu'

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
    orignalUrgentArray: Array<dataObj>;
    originalUrgentTrashArray: Array<dataObj>;
    showingInbox: boolean;
    selectedId: number;
    handleSortByDate: (e:string) => void;
    filterUrgentMail: () => void;
    displayTheEmailToRead: (arrayUsed:Array<dataObj>, idNo:number) => void;
}   

const EmailFeed:React.FC<Props> = ({orignalUrgentArray, originalUrgentTrashArray, showingInbox, selectedId, handleSortByDate, filterUrgentMail, displayTheEmailToRead}) => {
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
                orignalUrgentArray.map((arr) => (
                    <EmailFeedItem arrayUsed={orignalUrgentArray} displayTheEmailToRead={displayTheEmailToRead} selectedId={selectedId} id={arr.id} read={arr.read} urgent={arr.urgent} sender={arr.sender} email={arr.email} subject={arr.subject} message={arr.message} date={arr.date} picture={arr.picture}/>
                )) : 
                originalUrgentTrashArray.map((arr) => (
                    <EmailFeedItem arrayUsed={originalUrgentTrashArray} displayTheEmailToRead={displayTheEmailToRead} selectedId={selectedId} id={arr.id} read={arr.read} urgent={arr.urgent} sender={arr.sender} email={arr.email} subject={arr.subject} message={arr.message} date={arr.date} picture={arr.picture}/>
                ))
            }
        </div>
    )
}

export default EmailFeed