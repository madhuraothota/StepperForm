import React from "react";

const ReadOnlyRow = ({ contact,handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phonenumber}</td>
            <td>
                <button type="button" onClick={() => handleDeleteClick(contact.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow;