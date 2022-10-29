import *as React from "react";
import { Grid, Box } from "@mui/material";
import ProgramFS from "./ProgramFS";
import ProgramBS from "./ProgramBS";
import ProgramDM from "./ProgramDM";
import './Programs.css';



const Programs = () => {
    return (
        <Box>
            <Grid container direction={'row'} spacing={2}>
                <Grid item xs={12} sm={4} >
                    <ProgramFS />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ProgramBS />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ProgramDM />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Programs;