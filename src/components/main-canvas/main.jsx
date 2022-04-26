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
    const [orignalUrgentArray, setOrignalUrgentArray] = useState(originalArray)
    const [originalUrgentTrashArray, setOriginalUrgentTrashArray] = useState(originalTrashArray)

    const [checked, setChecked] = useState(false)
    const [displayEmailMessage, setdisplayEmailMessage] = useState(undefined)
    const [selectedId, setSelectedId] = useState('')

    const showInbox = () => {
        setShowingInbox(true)
        setdisplayEmailMessage(orignalUrgentArray[0])
    }
    const showTrash = () => {
        setShowingInbox(false)
        setdisplayEmailMessage(originalUrgentTrashArray[0])
    }

    const handleSortByDate = (e) => {
        if(e.target.value === '1'){
            sortTheArraybyMostRecent(true, originalArray)
            sortTheArraybyMostRecent(false, originalTrashArray)
        } if(e.target.value === '2'){
            sortTheArrayByOldest(true, originalArray)
            sortTheArrayByOldest(false, originalTrashArray)
        }
    }
    const sortTheArraybyMostRecent = (isInbox, arr) => {
        let copy = [...arr]
        console.log(copy)
        let sorted = copy.sort((a,b) => {
            return new Date(b.date) - new Date(a.date);
        });
        if(isInbox === true){
            setOriginalArray(sorted)
        }else{
            console.log('why?')
            setOriginalTrashArray(sorted)
        }
    }
    useEffect(()=> {
        sortTheArraybyMostRecent(true, originalArray)
        sortTheArraybyMostRecent(false, originalTrashArray)
    },[inboxArray, trashArray])

    const sortTheArrayByOldest = (isInbox, arr) => {
        let copy = [...arr]
        console.log(copy)
        let sorted = copy.sort((b,a) => {
            return new Date(b.date) - new Date(a.date);
        });
        if(isInbox === true){
            setOriginalArray(sorted)
        }else{
            setOriginalTrashArray(sorted)
        }
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
            setOrignalUrgentArray(filteredEmail)
            setOriginalUrgentTrashArray(filteredTrash)
        }else{
            setOrignalUrgentArray(originalArray)
            setOriginalUrgentTrashArray(originalTrashArray)
        }
    }
    useEffect(filterUrgentMailTwo,[checked,originalArray, originalTrashArray, orignalUrgentArray, originalUrgentTrashArray])
    
    useEffect(()=> {
        let copyNormal = [...originalArray];
        let sortedNormal = copyNormal.sort((a,b) => {
            return new Date(b.date) - new Date(a.date);
        });
        setdisplayEmailMessage(sortedNormal[0])
        setSelectedId(sortedNormal[0].id)
    },[])

    const displayTheEmailToRead = (arrayUsed, idNo) => {
        const copyArr = [...arrayUsed]
        for(let i=0; i<copyArr.length; i++){
            if(copyArr[i].id == idNo){
                setdisplayEmailMessage(copyArr[i])
                copyArr[i].read = true;
                if(showingInbox === true){
                    setOriginalArray(copyArr)
                }else{
                    setOriginalTrashArray(copyArr)
                }
                setSelectedId(idNo)
            }
        }
    }

    const deleteEmail = (idNo) => {
        if(showingInbox === true){
            let copyNormal = [...originalArray];
            let copyTrash = [...originalTrashArray]
            for(let i=0; i<originalArray.length;i++){
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
        if(showingInbox === false){
            let copyNormal = [...originalArray];
            let copyTrash = [...originalTrashArray]
            for(let i=0; i<originalTrashArray.length;i++){
                console.log('next')
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
                <EmailFeed orignalUrgentArray={orignalUrgentArray} originalUrgentTrashArray={originalUrgentTrashArray} showingInbox={showingInbox} selectedId={selectedId} handleSortByDate={handleSortByDate} filterUrgentMail={filterUrgentMail} displayTheEmailToRead={displayTheEmailToRead}/>
            </div>
            <div className="main__emailContent">
                {displayEmailMessage != undefined && <EmailContent showingInbox={showingInbox} displayEmailMessage={displayEmailMessage} deleteEmail={deleteEmail} restoreEmail={restoreEmail} goBack={goBack} goForward={goForward}/>}
            </div>
        </div>
    )
}

export default Main 