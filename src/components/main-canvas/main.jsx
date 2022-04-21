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
    const [originalTrashArray, setOriginalTrashArray] = useState(trashArray)
    const [orignalUrgentArray, setOrignalUrgentArray] = useState(inboxArray)
    const [originalUrgentTrashArray, setOriginalUrgentTrashArray] = useState(trashArray)

    const [checked, setChecked] = useState(false)

    const handleSortByDate = (e) => {
        if(e.target.value === '1'){
            sortTheArraybyMostRecent()
        } if(e.target.value === '2'){
            sortTheArrayByOldest()
        }
    }

    const showInbox = () => {
        setShowingInbox(true)
        setdisplayEmailMessage(orignalUrgentArray[0])
    }
    const showTrash = () => {
        setShowingInbox(false)
        setdisplayEmailMessage(originalUrgentTrashArray[0])
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
    useEffect(sortTheArraybyMostRecent,[inboxArray, trashArray])
    
    const filterUrgentMail = () => {
        setChecked(!checked)
    }

    const filterUrgentMailTwo = () => {
        if(checked === true){
            let inboxCopy = [...originalArray]
            let trashCopy = [...originalTrashArray]
            let filteredEmail = inboxCopy.filter(arr => arr.urgent === true)
            let filteredTrash = trashCopy.filter(arr => arr.urgent === true)
            setOrignalUrgentArray(filteredEmail)
            setOriginalUrgentTrashArray(filteredTrash)
        }else{
            setOrignalUrgentArray(originalArray)
            setOriginalUrgentTrashArray(originalTrashArray)
        }
    }
    useEffect(filterUrgentMailTwo,[checked, originalTrashArray, originalUrgentTrashArray])
    
    
    const [displayEmailMessage, setdisplayEmailMessage] = useState(undefined)
    useEffect(()=> {
        let copyNormal = [...originalArray];
        let sortedNormal = copyNormal.sort((a,b) => {
            return new Date(b.date) - new Date(a.date);
        });
        setdisplayEmailMessage(sortedNormal[0])
    },[])

    const displayTheEmailToRead = (idNo) => {
        const bothArr = [...trashArray,...inboxArray]
        for(let i=0; i<bothArr.length; i++){
            if(bothArr[i].id == idNo){
                setdisplayEmailMessage(bothArr[i])
            }
        }
    }

    const deleteEmail = (idNo) => {
        if(showingInbox === true){
            let copyNormal = [...originalArray];
            let copyTrash = [...originalTrashArray]
            for(let i=0; i<originalArray.length;i++){
                console.log(originalArray[i].id)
                if(originalArray[i].id === idNo){
                    copyTrash.push(originalArray[i])
                    copyNormal.splice(i, 1)
                    setOriginalArray(copyNormal)
                    setOriginalTrashArray(copyTrash)
                }
            }
            goForward()
        }
    }
    const restoreEmail = (idNo) => {
        if(showInbox === false){
            let copyNormal = [...originalArray];
            let copyTrash = [...originalTrashArray]
            for(let i=0; i<originalTrashArray.length;i++){
                console.log(originalArray[i].id)
                if(originalTrashArray[i].id === idNo){
                    copyNormal.push(originalTrashArray[i])
                    copyTrash.splice(i, 1)
                    setOriginalArray(copyNormal)
                    setOriginalTrashArray(copyTrash)
                }
            }
            goForward()
        }
    }
    console.log(inboxArray, trashArray)   
    console.log(originalArray, originalTrashArray)

    const goBack = () => {
        if(showingInbox === true){
            if(orignalUrgentArray[0] === displayEmailMessage){
                setdisplayEmailMessage(orignalUrgentArray[orignalUrgentArray.length-1])
            }else{
                for(let i=0 ; i<orignalUrgentArray.length; i++){
                    if(orignalUrgentArray[i]===displayEmailMessage){
                        setdisplayEmailMessage(orignalUrgentArray[i-1])
                    }
                }
            }
        }
        if(showingInbox === false){
            if(originalUrgentTrashArray[0] === displayEmailMessage){
                setdisplayEmailMessage(originalUrgentTrashArray[originalUrgentTrashArray.length-1])
            }else{
                for(let i=0 ; i<originalUrgentTrashArray.length; i++){
                    if(originalUrgentTrashArray[i]===displayEmailMessage){
                        setdisplayEmailMessage(originalUrgentTrashArray[i-1])
                    }
                }
            }
        }
    }

    const goForward = () => {
        if(showingInbox === true){
            if(orignalUrgentArray[orignalUrgentArray.length-1] === displayEmailMessage){
                setdisplayEmailMessage(orignalUrgentArray[0])
            }else{
                for(let i=0 ; i<orignalUrgentArray.length; i++){
                    if(orignalUrgentArray[i] === displayEmailMessage){
                        setdisplayEmailMessage(orignalUrgentArray[i+1])
                    }
                }
            }
        }
        if(showingInbox === false){
            if(originalUrgentTrashArray[originalUrgentTrashArray.length-1] === displayEmailMessage){
                setdisplayEmailMessage(originalUrgentTrashArray[0])
            }else{
                for(let i=0 ; i<originalUrgentTrashArray.length; i++){
                    if(originalUrgentTrashArray[i] === displayEmailMessage){
                        setdisplayEmailMessage(originalUrgentTrashArray[i+1])
                    }
                }
            }
        }
    }

    return (
        <div className='main'>
            <div className="main__sideNav">
                <SideNav showingInbox={showingInbox} originalArray={originalArray} originalTrashArray={originalTrashArray} showInbox={showInbox} showTrash={showTrash}/>
            </div>
            <div className="main__emailFeed">
                <EmailFeed orignalUrgentArray={orignalUrgentArray} originalUrgentTrashArray={originalUrgentTrashArray} showingInbox={showingInbox} handleSortByDate={handleSortByDate} filterUrgentMail={filterUrgentMail} displayTheEmailToRead={displayTheEmailToRead}/>
            </div>
            <div className="main__emailContent">
                {displayEmailMessage != undefined && <EmailContent showingInbox={showingInbox} displayEmailMessage={displayEmailMessage} deleteEmail={deleteEmail} restoreEmail={restoreEmail} goBack={goBack} goForward={goForward}/>}
            </div>
        </div>
    )
}

export default Main 