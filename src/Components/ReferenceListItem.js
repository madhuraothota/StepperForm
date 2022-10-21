import React from 'react';
import { Box, Button, Grid, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, TextField, Typography } from '@mui/material';

 const ReferenceListItem = ({item,deleteReferalProp}) => {

    const deleteReferal = _ => deleteReferalProp(item);

    
  return (
    <TableContainer component='Paper'>
        <Table aria-aria-label='simple table'>
        <TableBody>
        <TableCell >{item.name}</TableCell>
        <TableCell >{item.email}</TableCell>
        <TableCell >{item.phone}</TableCell>        
        <TableCell ><input type="button" value="delete" onClick={deleteReferal}/></TableCell>        
        </TableBody>
        </Table>
    </TableContainer>
  )
}

export default ReferenceListItem;