import React, { useEffect } from 'react'
import { useAppSelector } from '../hooks/reduxHooks'
import { Navigate, Route } from 'react-router-dom'




export const ProtectRoute:typeof Route = () => {
    const isAuth = useAppSelector(state=>state.user.isAuth)
    if(localStorage.getItem("token") && isAuth){
        return <Navigate to={"/table"} replace/>
    }
    return <Navigate to={"/auth"} replace/>
}
