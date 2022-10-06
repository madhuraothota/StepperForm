import * as React from 'react';
import {Box,Button} from '@mui/material';
import { Typography } from '@mui/material';

const ReferEarn = () => {
  return (
    <Box
      sx={{
        height: '200px',
        width : {
          xs:100,
          sm:600,
          md:900,
          lg:1200,
          xl:1536
        },
        margin: 5,
        backgroundColor: '#86dbe3',
        border: '1px dashed grey'
      }}>
      <h6>Refer and Earn</h6>
      <Typography>Refer upskilling content to your friends & family to Eearn
        cash for each registration</Typography>
      
      <Button variant="contained" color="secondary" >My Referals</Button>

    </Box>
  );
}

export default ReferEarn;