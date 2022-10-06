import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './ProgramFS.css';

const ReferalEntries = () => {
    return (
        <Box component='card'>
            <Card style={{backgroundColor:"#eeeee4"}}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        0
                    </Typography>
                    <Typography sx={{ mt: 1.5,fontWeight:'bold',color:'black'}}>
                       Referal Entries
                    </Typography>
                </CardContent>
            </Card>
        </Box>       
        
    );
}

export default ReferalEntries;