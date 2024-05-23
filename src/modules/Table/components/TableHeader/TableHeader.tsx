import React from 'react'
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

interface props{
    selectAllEl: (event: React.ChangeEvent<HTMLInputElement>)=>void;
    numSelected: number;
    numRows: number;
}
export const TableHeader = ({selectAllEl,numSelected,numRows}:props) => {

  return (
    <TableHead>
        <TableRow>
            <TableCell padding="checkbox">
                <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < numRows}
                checked={numRows > 0 && numSelected === numRows}
                onChange={selectAllEl}
                inputProps={{
                    'aria-label': 'select all desserts',
                }}
                />
            </TableCell>
            <TableCell align="center">
                Company signature name
            </TableCell>
            <TableCell align="center">Company sig date</TableCell>
            <TableCell align="center">Document name</TableCell>
            <TableCell align="center">Document status</TableCell>
            <TableCell align="center">Document type</TableCell>
            <TableCell align="center">Employee number</TableCell>
            <TableCell align="center">Employee sig date</TableCell>
            <TableCell align="center">Employee signature name</TableCell>
        </TableRow>
  </TableHead>
  )
}
