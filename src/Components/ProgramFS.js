import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './ProgramFS.css';

const ProgramFS = () => {
    return (
        <Box component='card'>
            <Card style={{backgroundColor:"#eeeee4"}}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        Certification Program in Full Stack Development
                    </Typography>
                    <Typography sx={{ mt: 1.5,fontWeight:'bold',color:'black'}}>
                        Earn Rs.250 per invite
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        
    );
}

export default ProgramFS;