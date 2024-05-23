import React,{useEffect, useLayoutEffect} from 'react'
import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { useAppDispatch} from './hooks/reduxHooks'
import { setUser } from './store/slices/user/user'

export const App = () => {
  const dispatch = useAppDispatch();
  useLayoutEffect(()=>{
    if(localStorage.getItem("token")){
      dispatch(setUser({name:"user1"}))
    }
  },[])
  return (
    <div className='App'>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  )
}
