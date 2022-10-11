import React, { useState } from 'react';
import { Container } from '@mui/system';
import { styled } from '@mui/material/styles';
import { Box, TextField, Button, IconButton, Grid, Paper } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import './ReferalForm.css';
import Share from './Share';
import DividerOr from './DividerOr';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: orange[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});
const ReferalForm = () => {
    const [formFields, setFormFields] = useState([
        {
            name: '',
            email: ' ',
            phonenumber: ' '
        }
    ])

    const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }



    const addFields = () => {
        let object = {
            name: ' ',
            email: ' ',
            phonenumber: ''
        }
        setFormFields([...formFields, object]);

    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1);
        setFormFields(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formFields", formFields);
        alert(JSON.stringify(formFields));
    }
    return (
        <form onSubmit={handleSubmit} >
            {formFields.map((element, index) => {
                return (                    
                    <div className="form-inline" key={index}>
                        <Grid container spacing={1}>
                            <Grid item >
                                <TextField
                                    sx={{
                                        width: "300px",
                                        m: 2,
                                        border: 2,
                                        borderColor: 'gray',
                                        display: 'flex'

                                    }}
                                    name='name'
                                    label='Add your Friend Name'
                                    variant='outlined'
                                    value={element.name}
                                    onChange={event => handleFormChange(event, index)}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{
                                        width: "300px",
                                        m: 2,
                                        border: 2,
                                        borderColor: 'gray',
                                        display: 'flex'


                                    }}
                                    name='email'
                                    label='Email of your friend'
                                    variant='outlined'
                                    value={element.email}
                                    onChange={event => handleFormChange(event, index)}

                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{
                                        width: "300px",
                                        m: 2,
                                        border: 2,
                                        borderColor: 'gray',
                                        display: 'flex'


                                    }}
                                    name='phonenumber'
                                    label='Enter Mobile Number'
                                    variant='outlined'
                                    value={element.phonenumber}
                                    onChange={event => handleFormChange(event, index)}

                                />
                            </Grid>
                            <Grid>
                                <IconButton
                                    onClick={() => removeFields()}
                                >
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                            </Grid>
                            <Grid>
                                <IconButton
                                    onClick={() => addFields()}
                                >
                                    <AddBoxIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </div>
                    
                )
            })}
            <Share />
            <ThemeProvider theme={theme}>
                <Button
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                >Submit</Button>
            </ThemeProvider>
        </form>
        
    );
}

export default ReferalForm;
