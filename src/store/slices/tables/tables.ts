import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ITable } from '../../api/TableApi/types'
import { QuickSort } from '../../../helpers/algorithms/QuickSort'
import { BinarySearch } from '../../../helpers/algorithms/BinarySeatch'
// import { ISetUser, IUser} from './types'




const initialState:ITable[] = []
 

export const tablesSlice = createSlice({
    name:"tables",
    initialState,
    reducers:{
        addTable:(state, action:PayloadAction<ITable[]>)=> {
            const newArr = [...state,...action.payload]
            return QuickSort(newArr)
        },
        deleteTable:(state,action:PayloadAction<string[]>)=>{
            const id = action.payload
            const sortedArr = QuickSort(state);
            id.forEach(a=>{
                const indexOfTable = BinarySearch(sortedArr,a)
                if(indexOfTable>-1){
                    sortedArr.splice(indexOfTable,1)
                }            
            })
            return sortedArr
        },
        updateTable:(state,action:PayloadAction<ITable>)=>{
            const {id} = action.payload
            const indexOfTable = BinarySearch(state,id)
            if(indexOfTable>-1){
                state[indexOfTable] = action.payload
            }
        },
    },
    extraReducers(builder) {},
})

export const {addTable,deleteTable, updateTable} = tablesSlice.actions

export default tablesSlice.reducer