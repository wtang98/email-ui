import React, { useState, useEffect } from 'react'
import './main.scss'
import SideNav from './side-nav/side-nav'
import dummyemail from '../../assets/dummydata/email.js'
import dummyTrash from '../../assets/dummydata/trash.js'
import EmailFeed from './email-feed/emailFeed'
import EmailContent from './email-content/emailContent'


const Main = () => {
    const [showingInbox, setShowingInbox] = useState(true)
    const [inboxArray, setInboxArray] = useState(dummyemail)
    const [trashArray, setTrashArray] = useState(dummyTrash)
    const [originalArray, setOriginalArray] = useState(inboxArray)
    const [showArray, setShowArray] = useState(originalArray)
    // const [filteredArray, setfilteredArray] = useState([])
    const [checked, setChecked] = useState(false)
    const [dateSortedArray, setDateSortedArray] = useState([])
    
    const showInbox = () => {
        setShowingInbox(true)
        setOriginalArray(inboxArray)
    }

    const showTrash = () => {
        setShowingInbox(false)
        setOriginalArray(trashArray)
    }

    const sortTheArraybyMostRecent = () => {
        let copy = [...showArray];
        let sorted = copy.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        });
        setDateSortedArray(sorted)
    }
    const sortTheArrayByOldest = () => {
        let copy = [...showArray];
        let sorted = copy.sort(function(b,a){
            return new Date(b.date) - new Date(a.date);
        });
        setDateSortedArray(sorted)
    }

    const displayTheEmailToRead = (i) => {
        
    }
    
    const filterUrgentMail = () => {
        console.log(checked)
        setChecked(!checked)
    }
    const filterUrgentMailTwo = () => {
        console.log(checked)
        if(checked === true){
            let copy = [...showArray]
            let filtered = showArray.filter(arr => arr.urgent === true)
            setShowArray(filtered)
        }else{
            setShowArray(originalArray)
        }
    }

    const handleSortByDate = (e) => {
        // console.log(e.target.value)
        if(e.target.value == '1'){
            sortTheArraybyMostRecent()
        } if(e.target.value == '2'){
            sortTheArrayByOldest()
        }
    }

    useEffect(sortTheArraybyMostRecent,[showArray])
    useEffect(filterUrgentMailTwo,[checked, originalArray])

    return (
        <div className='main'>
            <div className="main__sideNav">
                <SideNav showingInbox={showingInbox} inboxArray={inboxArray} trashArray={trashArray} showInbox={showInbox} showTrash={showTrash}/>
            </div>
            <div className="main__emailFeed">
                <EmailFeed emailFeed={dateSortedArray} handleSortByDate={handleSortByDate} filterUrgentMail={filterUrgentMail} displayTheEmailToRead={displayTheEmailToRead}/>
            </div>
            <div className="main__emailContent">
                <EmailContent/>
            </div>
        </div>
    )
}

export default Main 