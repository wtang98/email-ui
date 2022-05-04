import React from 'react'
import './side-nav.scss'
import Trash from '../../../assets/icons/trash.png'
import Email from '../../../assets/icons/email.png'

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
    showingInbox: boolean;
    orignalUrgentArray: Array<dataObj>;
    originalUrgentTrashArray: Array<dataObj>;
    showInbox: () => void;
    showTrash: () => void;
}

const SideNav: React.FC<Props> = ({showingInbox, originalUrgentTrashArray, orignalUrgentArray, showInbox, showTrash}) => {

    return (
        <div className='sideNav'>
            <div className='sideNav__contents'>
                <div className={`sideNav__contents-inbox ${showingInbox ? 'selected' : ''}`} onClick={showInbox} data-cy='inboxSelector'>
                    <div className='sideNav__contents-inbox-left'>
                        <img className='email' src={Email} alt='' />
                        <p className={`${showingInbox  ? 'selectedP' : ''}`}>Inbox</p>
                    </div>
                    <div className='sideNav__contents-inbox-items' data-cy='inboxCounter'>
                        {orignalUrgentArray.length}
                    </div>
                </div>
                
                <div className={`sideNav__contents-trash ${showingInbox  ? '' : 'selected'}`} onClick={showTrash} data-cy='trashSelector'>
                    <div className='sideNav__contents-trash-left'>
                        <img className='trash' src={Trash} alt='' />
                        <p className={`${showingInbox  ? '' : 'selectedP'}`}>Trash</p>
                    </div>
                    <div className='sideNav__contents-trash-items' data-cy='trashCounter'>
                        {originalUrgentTrashArray.length}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav