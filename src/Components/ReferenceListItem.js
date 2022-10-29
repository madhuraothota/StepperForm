import React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';

 const ReferenceListItem = ({item,deleteReferalProp}) => {

    const deleteReferal = _ => deleteReferalProp(item);

    
  return (
    <TableContainer>
        <Table >
        <TableBody>
        <TableRow>
        <TableCell >{item.name}</TableCell>
        <TableCell >{item.email}</TableCell>
        <TableCell >{item.phone}</TableCell>        
        <TableCell ><input type="button" value="delete" onClick={deleteReferal}/></TableCell> 
        </TableRow>       
        </TableBody>
        </Table>
    </TableContainer>
  )
}

export default ReferenceListItem;