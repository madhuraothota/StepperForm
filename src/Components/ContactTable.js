import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ReferenceListItem from './ReferenceListItem';

const jsonData = []

const ContactTable = () => {
    const [referalData, setReferalData] = useState(jsonData);
    

   
    const addReferal = referal  => {
       
    setReferalData([...referalData,referal]);
    
    }  

    const deleteReferal = referal => {
        setReferalData(referalData.filter(referalItem => referalItem.id !== referal.id))
        
   
    }
    

    return (
        <div className='App'>
           
            {
                referalData.map(referal => <ReferenceListItem key={referal.id} item={referal} deleteReferalProp = {deleteReferal}/>)
            }
            <ContactForm addReferalProp = {addReferal}/>
        </div>
    );
                  
   
}

export default ContactTable;