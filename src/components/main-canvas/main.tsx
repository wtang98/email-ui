import React, { useState, useEffect } from 'react'
import './main.scss'
import SideNav from './side-nav/side-nav'
import dummyemail from '../../assets/dummydata/email.js'
import dummyTrash from '../../assets/dummydata/trash.js'
import EmailFeed from './email-feed/emailFeed'
import EmailContent from './email-content/emailContent'

type dataObj  = {
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

const Main: React.FC = () => {
    const [showingInbox, setShowingInbox] = useState(true)
    const [inboxArray, setInboxArray] = useState(dummyemail)
    const [trashArray, setTrashArray] = useState(dummyTrash)

    const [originalArray, setOriginalArray] = useState(inboxArray)
    const [originalTrashArray, setOriginalTrashArray] = useState(trashArray)
    const [orignalUrgentArray, setOrignalUrgentArray] = useState(originalArray)
    const [originalUrgentTrashArray, setOriginalUrgentTrashArray] = useState(trashArray)

    const [checked, setChecked] = useState(false)
    const [displayEmailMessage, setdisplayEmailMessage] = useState(originalArray[0])
    const [selectedId, setSelectedId] = useState(0)

    const showInbox = () => {
        setShowingInbox(true)
        setdisplayEmailMessage(orignalUrgentArray[0])
        setSelectedId(orignalUrgentArray[0].id)
    }
    const showTrash = () => {
        setShowingInbox(false)
        setdisplayEmailMessage(originalUrgentTrashArray[0])
        setSelectedId(originalUrgentTrashArray[0].id)
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


    const sortTheArraybyMostRecent = (isInbox: boolean, arr: Array<dataObj>) => {
        let copy = [...arr]
        let sorted: Array<dataObj> = copy.sort((a:dataObj, b:dataObj) => {
            return Number(new Date(b.date)) -  Number(new Date(a.date));
        });
        if(isInbox === true){
            setOriginalArray(sorted)
        }else{
            setOriginalTrashArray(sorted)
        }
    }

    useEffect(()=> {
        sortTheArraybyMostRecent(true, originalArray)
    },[])
    useEffect(()=> {
        if(showingInbox===true){
            setdisplayEmailMessage(orignalUrgentArray[0])
            displayTheEmailToRead(originalArray, originalArray[0].id)
        }else{
            setdisplayEmailMessage(originalUrgentTrashArray[0])
            displayTheEmailToRead(originalUrgentTrashArray, originalUrgentTrashArray[0].id)
        }
    },[originalArray, originalTrashArray, orignalUrgentArray, originalUrgentTrashArray])

    const sortTheArrayByOldest = (isInbox: boolean, arr: Array<dataObj>) => {
        let copy = [...arr]
        let sorted: Array<dataObj> = copy.sort((b:dataObj, a:dataObj) => {
            return Number(new Date(b.date)) - Number(new Date(a.date));
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
        let sortedNormal = copyNormal.sort((a:dataObj, b:dataObj) => {
            return Number(new Date(b.date)) - Number(new Date(a.date));
        });
        displayTheEmailToRead(sortedNormal, sortedNormal[0].id)
        setSelectedId(sortedNormal[0].id)
    },[])
    
    const displayTheEmailToRead = (arrayUsed:Array<dataObj>, idNo:number) => {
        const copyArr = [...arrayUsed]
        for(let i=0; i<copyArr.length; i++){
            if(copyArr[i].id == idNo){
                setdisplayEmailMessage(copyArr[i])
                copyArr[i].read = true;
                setSelectedId(idNo)
            }
        }
    }

    const deleteEmail = (idNo:number) => {
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
    const restoreEmail = (idNo:number) => {
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
                <SideNav showingInbox={showingInbox} orignalUrgentArray={orignalUrgentArray} originalUrgentTrashArray={originalUrgentTrashArray} showInbox={showInbox} showTrash={showTrash}/>
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