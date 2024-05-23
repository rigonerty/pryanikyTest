import React from 'react'
import { ITable } from '../../../../store/api/TableApi/types';
import { BinarySearchNotObjects } from '../../../../helpers/algorithms/BinarySeatch';
import { IconButton, Checkbox,TableRow,TableCell,TableBody} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
interface props{
    rows: ITable[];
    selectEl:(event: React.MouseEvent<unknown>,id:string)=>void;
    isSelected:string[];
    selectElToUpdate:(id:string)=>void
}


export const TableMainBody = ({rows,selectEl,isSelected,selectElToUpdate}:props) => {
  return (
    <TableBody>
    {rows.map((row,index) => {
        const elIsSelected = BinarySearchNotObjects(isSelected,row.id);
        const labelId = `enhanced-table-checkbox-${row.id}`;
    return(
      <TableRow
        key={`${row.id}-${index}`}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        aria-checked={elIsSelected > -1}
        selected={elIsSelected > -1}

      >
        <TableCell onClick={(e)=>selectEl(e,row.id)}>
            <Checkbox
                color="primary"
                checked={elIsSelected > -1}
                inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />            
        </TableCell>

        <TableCell component="th" scope="row" id={labelId}>
          {row.companySignatureName}
        </TableCell>
        <TableCell align="right">{row.companySigDate}</TableCell>
        <TableCell align="right">{row.documentName}</TableCell>
        <TableCell align="right">{row.documentStatus}</TableCell>
        <TableCell align="right">{row.documentType}</TableCell>
        <TableCell align="right">{row.employeeNumber}</TableCell>
        <TableCell align="right">{row.employeeSigDate}</TableCell>
        <TableCell align="right">{row.employeeSignatureName}</TableCell>
        <TableCell align="right">
            <IconButton onClick={()=>selectElToUpdate(row.id)}>
              <EditIcon/>
            </IconButton>
        </TableCell>
      </TableRow>
    )})}
  </TableBody>
  )
}
