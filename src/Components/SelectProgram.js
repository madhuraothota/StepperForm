import React, { useState } from 'react';
import { Box, Grid, MenuItem, FormControl, Select, Typography } from '@mui/material';
import Referal from './Referal';
import './SelectProgram.css';



const SelectProgram = () => {
  const [program, setProgram] = useState(0);
  const [showhide, setShowhide] = useState(false);

  const handleChange = (event) => {
    const getProgram = event.target.value;
    console.log(getProgram);
    setShowhide(true);
    setProgram(getProgram);

  };


  return (
    <Grid container>
      <Grid item sm={4} xs={12}>
        <Typography variant="h6">Select a program to refer :</Typography>
      </Grid>
      <Grid item sm={8} xs={12}>
        <FormControl fullWidth requried>
          <Box sx={{ m: 4 }}>
            <Select
              displayEmpty
              value={program}
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
          showhide && program === 10? <Referal /> : " "

        }
        {
          showhide  && program === 20 ? <Referal /> : " "

        }
        {
          showhide  && program === 30 ? <Referal /> : " "

        }


      </Grid>
    </Grid>


  );
}

export default SelectProgram;
