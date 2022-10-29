import *as React from "react";
import { Grid, Box} from "@mui/material";
import ReferalEntries from './ReferalEntries';
import SignUp from './SignUp';
import Registrations from "./Registrations";



const ReferalStatus = () => {

    return (
        <Box sx={{ flexGrow: 1, m:4}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <ReferalEntries/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SignUp/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Registrations/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ReferalStatus;
    