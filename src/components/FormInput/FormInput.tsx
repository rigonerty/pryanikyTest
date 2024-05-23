import React, { useState } from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import { RegisterOptions, useFormContext,Controller } from 'react-hook-form'
import { IconButton, TextField } from '@mui/material';
import cl from "./FormInput.module.scss"

interface props{
  name:string;
  label:string;
  secureTextEntry?:boolean;
  registerOptions?: RegisterOptions;
  type?:string;
}
export const FormInput = ({
    name,
    label,secureTextEntry=false,
    registerOptions={
        required: true,
        maxLength:20,
        minLength:4,
      },
    type="text"}
    :props) => {

  const [isVisible,setVisible] = useState(false)
  const {
    register,
    formState: { errors },
    control
  } = useFormContext();
  return (
    <div className={cl.FormInput}>
      {secureTextEntry
        ? (<Controller 
        control={control}
        defaultValue={""}
        name={name}
        render={({
              field: { onChange, value },
              fieldState: { error },
              formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                type={isVisible?"text":"password"}
                error={!!error}
                value={value}
                {...register(name,registerOptions)}
                onChange={onChange}
                fullWidth
                label={label}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" 
                      // style={{ backgroundColor: '#D3D4D0', marginLeft: '-14px', padding: "10px 13px", width: "26px", color: '#a1a39b' }}
                      >
                        <IconButton onClick={()=>setVisible(!isVisible)}>
                          {isVisible?<VisibilityOutlinedIcon/>:<VisibilityOffOutlinedIcon/>}
                        </IconButton>
                      
                    </InputAdornment>
                  )
                }}
                variant="outlined"
              />
            )}/>)
        : (<Controller 
        control={control}
        defaultValue={""}
        name={name}
        render={({
              field: { onChange, value },
              fieldState: { error },
              formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                type={type}
                value={value}
                {...register(name,registerOptions)}
                onChange={onChange}
                fullWidth
                label={label}
                variant="outlined"
              />
            )}/>)
        }
     
    
    </div>
  )
}
