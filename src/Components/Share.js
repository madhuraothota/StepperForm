import React from "react";
import { Button,Box,TextField, Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { TextFields } from "@mui/icons-material";



const action = (
    <Button color="secondary" size="small">
        <ContentCopyOutlinedIcon />
    </Button>
);


const Share = () => {
    return (
        <React.Fragment>
            <Typography>Share with your friends</Typography>
            <Grid Container>
                    <Grid item>
                    <Typography>Referal Link :</Typography>
                    </Grid>
                    <Grid item>
                    <Typography>Referal Code :</Typography>
                    </Grid>
                    <Grid item>
                    <Typography>Share Via Social</Typography>
                    <LinkedInIcon />                    
                    <FacebookIcon />                    
                    <TwitterIcon />                   
                    <WhatsAppIcon /> 
                    </Grid>                   
                </Grid>            
        </React.Fragment>
    )
}

export default Share;