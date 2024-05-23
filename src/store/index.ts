import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from "./slices/user/user"
import tableSlice from "./slices/tables/tables"
import { authApi } from './api/AuthApi/AuthApi'
import { tableApi } from './api/TableApi/TableApi'


const rootReducer = combineReducers({
    user: userSlice,
    table: tableSlice,
    [authApi.reducerPath]: authApi.reducer,
    [tableApi.reducerPath]: tableApi.reducer
  })
const store = configureStore({
    reducer:rootReducer,
    
    middleware: (getDefaultMiddleware)=> 
        getDefaultMiddleware().concat([authApi.middleware,tableApi.middleware])
})

  
export const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
      reducer: rootReducer,
      preloadedState,
      middleware: (getDefaultMiddleware)=> 
        getDefaultMiddleware().concat([authApi.middleware,tableApi.middleware])
    })
  }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store


