import React from 'react'
import { Login } from '../../modules/Login'
import cl from "./AuthPage.module.scss"
export const AuthPage = () => {
  return (
    <div className={cl.AuthPage}>
      <Login/>
    </div>
  )
}
