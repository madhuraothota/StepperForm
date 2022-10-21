import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { orange } from '@mui/material/colors';

const MyReferalButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px dot',
    lineHeight: 1.5,
    backgroundColor: '#fc6203',
    borderColor: '#fc6203',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#fc8403',
        borderColor: '#fc8403',
        boxShadow: 'none',
    },

});



const ReferalEarn = () => {

    
    return (
        <Paper
            sx={{
                p: 4,
                margin: 10,
                maxWidth: 1200,
                flexGrow: 1,
                backgroundColor:'#DFF6FF'
                
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Refer & Earn
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Refer upskilling content to your friends & family to earn cash for each registration
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <MyReferalButton variant="contained" disableRipple>                       
                            My Referals                           
                        </MyReferalButton>

                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ReferalEarn;