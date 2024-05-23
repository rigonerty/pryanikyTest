import React, { useEffect,useLayoutEffect } from 'react'
import { useLazyGetTablesQuery } from '../../../../store/api/TableApi/TableApi'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import { addTable } from '../../../../store/slices/tables/tables'
import { TableContain } from '../TableContainer/TableContainer'
import { CircularProgress} from '@mui/material';
import cl from "./Table.module.scss"
export const Table = () => {
  const [getTables,{isLoading}] = useLazyGetTablesQuery()
  const tables = useAppSelector(state=>state.table)
  const dispatch = useAppDispatch()
  useLayoutEffect(()=>{
    getTables(null).unwrap().then(res=>{
      dispatch(addTable(res.data))
    })
  },[])
  return (
    <div style={tables.length===0?{paddingBottom:"1em"}:{}} className={cl.Table}>
        <TableContain rows={tables}/>
        {isLoading&&<div className={cl.isLoading}><CircularProgress /></div>}
        {!isLoading && tables.length===0 && <p className={cl.isEmpty}>This table not have rows.</p>}
    </div>
  )
}
