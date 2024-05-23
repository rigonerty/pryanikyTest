import React from "react"
import { useAppSelector } from "../hooks/reduxHooks"
import { Navigate, useLocation } from "react-router-dom"
interface props{
    children:React.ReactNode
}

export function RequireAuth({children}:props){
    let location = useLocation();
    const isAuth = useAppSelector(state=>state.user.isAuth)
    if(!isAuth && !localStorage.getItem("token")){
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }
    return children
}