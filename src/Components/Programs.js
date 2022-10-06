import *as React from "react";
import { Grid, Box, Paper } from "@mui/material";
import ProgramFS from "./ProgramFS";
import ProgramBS from "./ProgramBS";
import ProgramDM from "./ProgramDM";
import { styled } from '@mui/material/styles';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Programs = () => {
    return (
        <Box sx={{ flexGrow: 1,m:4 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ProgramFS />
                </Grid>
                <Grid item xs={4}>
                    <ProgramBS />
                </Grid>
                <Grid item xs={4}>
                    <ProgramDM />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Programs;