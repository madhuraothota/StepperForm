
import React, { Fragment, useState } from "react";
import { nanoid } from 'nanoid';
import './Jsonform.css';
import ReadOnlyRow from "../ReadOnlyRow";
import EditableRow from "../EditableRow";



const data = [ ]
     
   
const Jsonform = () => {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        name: ' ',
        email: ' ',
        phonenumber: ' '
    })

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);

    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            name: addFormData.name,
            email: addFormData.email,
            phonenumber: addFormData.phonenumber,

        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);

    }

    const handleEditClick = (event,contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
    }

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    }

    return (
        <div className="app-container">
            <p>Kindly submit the candidate's information you are referring.Get them to register with this information</p>
            <form>
                <table>
                    <thead>
                        <tr>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <Fragment>
                                {editContactId === contact.id ? (
                                    <EditableRow />
                                ) : (
                                    <ReadOnlyRow contact={contact}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter friend Name"
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Enter friend email"
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="phonenumber"
                    placeholder="Enter Phone Number"
                    onChange={handleAddFormChange}
                />
                <button>+</button>
            </form>
        </div>
    )
}

export default Jsonform;