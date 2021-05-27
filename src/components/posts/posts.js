import React, {useState} from 'react';
import Modal from '../modal/modal';
import './posts.css';

export default function Posts({passData}) {
    const[modalShown, toggleModal] = useState(false);

    return (
        <div>
            <div className='posts-body' onClick={() => {toggleModal(!modalShown)}}>
                <h3>{passData.title}</h3>
                <p>Published By User {passData.userId}</p>
            </div>
            <Modal shown={modalShown} close={() => toggleModal(false)} passData={passData}>
            </Modal>
        </div>
        
        
    )
}