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
    const [orginalUrgentArray, setOrginalUrgentArray] = useState(inboxArray)
    const [originalTrashArray, setOriginalTrashArray] = useState(trashArray)
    const [originalUrgentTrashArray, setOriginalUrgentTrashArray] = useState(trashArray)

    // const [showArray, setShowArray] = useState(originalArray)
    // const [filteredArray, setfilteredArray] = useState([])
    const [checked, setChecked] = useState(false)
    const [dateSortedArray, setDateSortedArray] = useState([])

    const handleSortByDate = (e) => {
        if(e.target.value === '1'){
            sortTheArraybyMostRecent()
        } if(e.target.value === '2'){
            sortTheArrayByOldest()
        }
    }

    const showInbox = () => {
        setShowingInbox(true)
    }
    const showTrash = () => {
        setShowingInbox(false)
    }

    const sortTheArraybyMostRecent = () => {
        let copyNormal = [...originalArray];
        let copyTrash = [...originalTrashArray]
        let sortedNormal = copyNormal.sort((a,b) => {
            return new Date(b.date) - new Date(a.date);
        });
        let sortedTrash = copyTrash.sort((a,b) => {
            return new Date(b.date) - new Date(a.date);
        });
        setOriginalArray(sortedNormal)
        setOriginalTrashArray(sortedTrash)
    }
    const sortTheArrayByOldest = () => {
        let copyNormal = [...originalArray];
        let copyTrash = [...originalTrashArray]
        let sortedNormal = copyNormal.sort((b,a) => {
            return new Date(b.date) - new Date(a.date);
        });
        let sortedTrash = copyTrash.sort((b,a) => {
            return new Date(b.date) - new Date(a.date);
        });
        setOriginalArray(sortedNormal)
        setOriginalTrashArray(sortedTrash)
    }

    const [displayEmailMessage, setdisplayEmailMessage] = useState(inboxArray[0])
    const displayTheEmailToRead = (idNo) => {
        console.log(idNo)
        const bothArr = [...trashArray,...inboxArray]
        for(let i=0; i<bothArr.length;i++){
            if(bothArr[i].id == idNo){
                setdisplayEmailMessage(inboxArray[i])
            }
        }
        console.log(displayEmailMessage)
    }
    
    const filterUrgentMail = () => {
        setChecked(!checked)
    }

    const filterUrgentMailTwo = () => {
        if(checked === true){
            let inboxCopy = [...originalArray]
            let trashCopy = [...originalTrashArray]
            let filteredEmail = inboxCopy.filter(arr => arr.urgent === true)
            let filteredTrash = trashCopy.filter(arr => arr.urgent === true)
            setOrginalUrgentArray(filteredEmail)
            setOriginalUrgentTrashArray(filteredTrash)
        }else{
            setOrginalUrgentArray(originalArray)
            setOriginalUrgentTrashArray(originalTrashArray)
        }
    }

    useEffect(sortTheArraybyMostRecent,[])
    useEffect(filterUrgentMailTwo,[checked, originalTrashArray, originalUrgentTrashArray])

    return (
        <div className='main'>
            <div className="main__sideNav">
                <SideNav showingInbox={showingInbox} inboxArray={inboxArray} trashArray={trashArray} showInbox={showInbox} showTrash={showTrash}/>
            </div>
            <div className="main__emailFeed">
                <EmailFeed orginalUrgentArray={orginalUrgentArray} originalUrgentTrashArray={originalUrgentTrashArray} showingInbox={showingInbox} handleSortByDate={handleSortByDate} filterUrgentMail={filterUrgentMail} displayTheEmailToRead={displayTheEmailToRead}/>
            </div>
            <div className="main__emailContent">
                <EmailContent/>
            </div>
        </div>
    )
}

export default Main 