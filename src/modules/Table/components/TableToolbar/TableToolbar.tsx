import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
interface props{
  numSelected: number;
  deleteEl:()=>void;
  isOpenAddDialog:React.Dispatch<React.SetStateAction<boolean>>;
}


export const TableToolbar = ({numSelected,deleteEl,isOpenAddDialog}:props) => {
  return (
    <Toolbar sx={
      {
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        background:numSelected===0?"#F8F8F8":"#0066CC",
      }
    }>
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="h6"
          component="div"
        >
          {numSelected} selected
        </Typography>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton onClick={deleteEl}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ):(
          <Tooltip title="Add">
            <IconButton onClick={()=>isOpenAddDialog(true)}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        )}
    </Toolbar>
  )
}
