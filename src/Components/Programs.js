import *as React from "react";
import { Grid, Box, Paper } from "@mui/material";
import ProgramFS from "./ProgramFS";
import ProgramBS from "./ProgramBS";
import ProgramDM from "./ProgramDM";
import { styled } from '@mui/material/styles';
import './Programs.css';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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