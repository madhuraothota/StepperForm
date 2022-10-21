import React from "react";
import { Button, Box,  Grid, Typography } from '@mui/material';
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


const Promo = () => {
    return (
        <React.Fragment>
            <p>Share with your friends</p>
            <Box>
                <Grid container spacing={1}>
                    <Grid item>
                        <label>
                            Referal Link :
                            <input type="text" />
                        </label>
                        </Grid>
                    <Grid item>
                        <label>
                            Referal Code :
                            <input type="text" />
                        </label>
                        </Grid>
                        <Grid item>
                        <h6>Share Via Social</h6>                        
                        <LinkedInIcon />
                        <FacebookIcon />
                        <TwitterIcon />
                        <WhatsAppIcon />
                    </Grid>
                 </Grid>
            </Box>
        </React.Fragment>
    )
}

export default Promo;