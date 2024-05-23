import React from 'react'
import { Button} from '@mui/material'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { logout } from '../../store/slices/user/user'





export const LogoutButton = () => {
  const dispatch = useAppDispatch()
  const logoutFunc = ()=>{
      dispatch(logout())
      localStorage.removeItem("token")
  }


  return (
    <Button variant="contained" color="error" onClick={logoutFunc} >Logout</Button>
  )
}
