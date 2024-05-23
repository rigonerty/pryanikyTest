import React,{useState,useEffect} from 'react'
import { ITable } from '../../../../store/api/TableApi/types';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableMainBody } from '../TableMainBody/TableMainBody';
import { BinarySearch, BinarySearchNotObjects } from '../../../../helpers/algorithms/BinarySeatch';
import { QuickSortNotObject } from '../../../../helpers/algorithms/QuickSort';
import { TableToolbar } from '../TableToolbar/TableToolbar';
import { useAddTableMutation, useDeleteTableMutation,useUpdateTableMutation} from '../../../../store/api/TableApi/TableApi';
import { TableDialog } from '../TableDialog/TableDialog';
import { ITableFields } from '../../types/interfaces';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { deleteTable,addTable,updateTable } from '../../../../store/slices/tables/tables';
import { Paper,CircularProgress,TableContainer,Table } from '@mui/material';

interface props{
    rows: ITable[];
}


export const TableContain = ({rows}:props) => {
  const [isSelected, setSelected] = useState<string[]>([])
  const [deleteTableServ] = useDeleteTableMutation()
  const [isSelectedToUpdate,setSelectedToUpdate] = useState<ITable|null>(null)
  const [isAddDialogOpen, setAddDialogOpen] = useState(false)
  const [isUpdateDialogOpen,setUpdateDialogOpen] = useState(false)
  const [addTableServ, dataAddTable] = useAddTableMutation()
  const [updateTableServ,dataUpdateTable] = useUpdateTableMutation()
  const dispatch = useAppDispatch()
  const SelectAll = (event: React.ChangeEvent<HTMLInputElement>)=>{
    if (event.target.checked) {
      const newSelected = QuickSortNotObject(rows.map((item) => item.id));
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  }
  const SelectEl = (event: React.MouseEvent<unknown>,id:string)=>{
    const indexSelectedEl = BinarySearchNotObjects(isSelected,id);
    if (indexSelectedEl===-1) {
      setSelected(prev=>QuickSortNotObject([...prev,id]));
      return;
    }
    setSelected(prev=>prev.toSpliced(indexSelectedEl,1));
  }

  const deleteEl = ()=>{
    isSelected.forEach((a)=>{
      deleteTableServ(a)
    })
    dispatch(deleteTable(isSelected))
    setSelected([])
  }

  const addEl=(arg:ITableFields)=>{
    arg.companySigDate= new Date(arg.companySigDate).toISOString()
    arg.employeeSigDate= new Date(arg.employeeSigDate).toISOString()
    addTableServ(arg)
  }
  useEffect(()=>{
    if(dataAddTable.data && dataAddTable.data["error_code"] === 0){
      dispatch(addTable([dataAddTable.data.data]))
    }
  },[dataAddTable.data])



  const onCloseUpdateDialog = ()=>{
    setUpdateDialogOpen(false)
    setSelectedToUpdate(null)
  }
  const selectToUpdate = (id:string)=>{
    const indexSelectedEl = BinarySearch(rows,id);
    if (indexSelectedEl>-1) {
      setSelectedToUpdate(rows[indexSelectedEl])
      setUpdateDialogOpen(true)
    }
  }
  const updateEl=(arg:ITableFields)=>{
    arg.companySigDate= new Date(arg.companySigDate).toISOString()
    arg.employeeSigDate= new Date(arg.employeeSigDate).toISOString()
    if(arg.id){
      updateTableServ(arg as ITable)
    }
  }
  useEffect(()=>{
    if(dataUpdateTable.data && dataUpdateTable.data["error_code"] === 0){
      dispatch(updateTable(dataUpdateTable.data.data))
    }
  },[dataUpdateTable.data])
  return (
    <>
      <TableDialog isOpen={isUpdateDialogOpen} title='Update row.' sendRequest={updateEl} setOpen={onCloseUpdateDialog} values={isSelectedToUpdate||undefined} isLoading={dataUpdateTable.isLoading}/>
      <TableDialog isOpen={isAddDialogOpen} title='Add row.' sendRequest={addEl} setOpen={setAddDialogOpen} isLoading={dataAddTable.isLoading}/>
      <TableToolbar numSelected={isSelected.length} deleteEl={deleteEl} isOpenAddDialog={setAddDialogOpen}/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeader selectAllEl={SelectAll} numRows={rows.length} numSelected={isSelected.length}/>
          <TableMainBody rows={rows} selectEl={SelectEl} isSelected={isSelected} selectElToUpdate={selectToUpdate}/>
        </Table>
      </TableContainer>  
    </>

  )
}
