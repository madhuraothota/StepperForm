import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container,Grid, InputLabel, MenuItem, FormControl,Paper, Select, Typography } from '@mui/material';
import ReferalForm from './ReferalForm';
import './SelectProgram.css';
import Jsonform from './json-form';

const SelectProgram = () => {
  const [program, setProgram] = useState('');
  const [showhide, setShowhide] = useState(false);

  const handleChange = (event) => {
    const getProgram = event.target.value;
    setShowhide(getProgram);

  };

  



  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
      <Grid Container spacing={1}>
      <Grid item xs={6}>
        <Item><Typography>Select a program to refer :</Typography></Item>
          </Grid>
          <Grid item xs={6}>
          <Item>
             <FormControl>
            <InputLabel id="demo-simple-select-label">Select Program</InputLabel>
            <Box sx={{ m: 4, width: '700px', display: 'flex' }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={program}
                label="Program"
                fullWidth
                onChange={handleChange}
              >
                <MenuItem value={10}>Certiifcation Program in Full stack Development</MenuItem>
                <MenuItem value={20}>Certiifcation Program in Business Startegy</MenuItem>
                <MenuItem value={30}>Certiifcation Program in Digital Marketing</MenuItem>
              </Select>
            </Box>
          </FormControl>
          
          {
            showhide === 10 && true ? <Jsonform/> : " "

          }
          {
            showhide === 20 && true ? <Jsonform /> : " "

          }
          {
            showhide === 30 && true ? <Jsonform/> : " "

          }
          </Item>
      </Grid>
    </Grid>   
  
  );
}

export default SelectProgram
