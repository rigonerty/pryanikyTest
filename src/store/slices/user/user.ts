import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ISetUser, IUser} from './types'




const initialState:IUser = {
    isAuth: false,
    name:"",

}
 

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        logout:()=> initialState,
        setUser:(state, action:PayloadAction<ISetUser>)=>{
            const {name} = action.payload
            state.isAuth = true;
            state.name = name;
        },
    },
    extraReducers(builder) {},
})

export const {logout,setUser} = userSlice.actions

export default userSlice.reducer