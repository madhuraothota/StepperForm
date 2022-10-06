import * as React from 'react';
import  {Box,Card,CardContent,Typography} from '@mui/material';


const SignUp = () => {
    return (
        <Box component='card'>
            <Card style={{backgroundColor:'#d1c4e9'}}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        0
                    </Typography>
                    <Typography sx={{ mt: 1.5,fontWeight:'bold',color:'black'}}>
                       Successful Sign-ups
                    </Typography>
                </CardContent>
            </Card>
        </Box>
       
    );
}

export default SignUp;