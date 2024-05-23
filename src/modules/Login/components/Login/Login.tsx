import React, { useEffect } from 'react'
import { useLoginMutation } from '../../../../store/api/AuthApi/AuthApi'
import { SubmitHandler, useForm,FormProvider } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import { setUser } from '../../../../store/slices/user/user'
import { ILoginFields } from '../../types/interfaces'
import { FormInput } from '../../../../components/FormInput/FormInput'
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import cl from "./Login.module.scss"
import { useNavigate } from "react-router-dom";
import { IsLogined } from '../IsLogined/IsLogined'


export const Login = () => {
    const [sendRequest,{data,error,isLoading,isSuccess}] = useLoginMutation()
    const isAuth = useAppSelector(state=>state.user.isAuth)
    const methods = useForm<ILoginFields>({mode:"onChange"})
    const {handleSubmit,reset,setError,getValues} = methods
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onSubmit:SubmitHandler<ILoginFields> = (inputData)=>{
      const {username, password} = inputData
      sendRequest({username, password})
    }
    useEffect(()=>{
      console.log("error",error)
      if(error && "status" in error){
        const formState= {type:"server", message:"Username or password is incorrect."}
        setError("username",formState)
      }
    },[error])
    useEffect(()=>{
      console.log("data",data)
      if(data && data.error_code===0 && isSuccess){
        localStorage.setItem("token", data.data.token)
        dispatch(setUser({name:getValues("username")}))
        navigate("/table")
        reset()
      }else if (data && data?.error_code!==0){
        const formState= {type:"server", message:data?.error_text||"Error on server."}
        setError("username",formState)
      }
    },[data])

    return (
      <div className={cl.Login}>
        { isAuth
          ?
            <IsLogined/>
        
          :       
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} data-testid="loginForm">
                <FormInput label="Name" name="username" registerOptions={{
                    required: true,
                    maxLength:20,
                    minLength:4}}/>
                  <FormInput secureTextEntry label="Password" name='password' registerOptions={{
                      required:true,
                      maxLength:30,
                      minLength:8
                    }}/>
              <Button type='submit' variant='contained' disabled={isLoading}>send</Button>
              {isLoading&&<CircularProgress/>}
            </form>          
          </FormProvider>
        }
      </div>
    )
}
