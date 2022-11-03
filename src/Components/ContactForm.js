import React, { useState } from "react";
import { Box, Button, TextField } from '@mui/material';
import Promo from "./Promo";

const ContactForm = ({ addReferalProp }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changePhone = (e) => {
        setPhone(e.target.value);

    }

    const addReferal = () => {
        
        addReferalProp({

            id: (new Date()).getTime(),
            name, email, phone

        })
    }
        setName('');
        setEmail('');
        setPhone('');
    

   const  handleSubmit = e =>{
        e.preventDefault();
        console.log(e);
    }

    return (
        <form onSubmit={handleSubmit}>
        <Box
            margin="auto"
            padding={5}
            
        >
            <TextField
                margin="normal"
                type={'text'}
                placeholder="Enter Friend Name"
                variant="outlined"
                value={name}
                onChange={changeName}
            >
            </TextField>
            <TextField
                margin="normal"
                type={'email'}
                placeholder="Enter Friend Email"
                variant="outlined"
                value={email}
                onChange={changeEmail}
            >
            </TextField>
            <TextField
                margin="normal"
                type={'number'}
                placeholder="Enter Phone Number"
                variant="outlined"
                value={phone}
                onChange={changePhone}

            >
            </TextField>
            <Button
                margin="normal"
                variant="contained"
                type="submit"
                onClick={addReferal}
            >+ Add friend</Button>
            </Box>
              <Promo/>
              <Button
                margin="normal"
                variant="contained"
                type="submit"
            >Submit</Button>
            
        
        </form>
     



    )
}

export default ContactForm;