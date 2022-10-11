import React from 'react';
import './ContactForm.css';
import Data from './src/data.json';

const ContactForm = () => {
    return (
        <div className='App'>
        <div className='Posts' key={Data.id}>
            {Data.map( post => {
                return (
                    <>
                    <p>{post.name}</p>
                    <p>{post.email}</p>
                    <p>{post.phonenumber}</p>
                    </>
                )
            })}
        </div>
        </div>
    )
}

export default ContactForm;