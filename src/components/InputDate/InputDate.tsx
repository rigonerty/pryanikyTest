import { LocalizationProvider,DateTimePicker } from '@mui/x-date-pickers';
import React from 'react'
import { Controller, useFormContext,RegisterOptions } from 'react-hook-form';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

interface props{
    name:string;
    label:string;
    registerOption?:RegisterOptions;
    defaultValue?: string;
}

const defaultOptions = {
    required: true,
    maxLength:20,
    minLength:4,
  }


export const InputDate = ({name,label, registerOption=defaultOptions, defaultValue}:props) => {
    const { control,register } = useFormContext();
  return (
    <Controller
    name={name}
    control={control}
    render={({ field: { onChange}, fieldState: { error } }) => (
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DateTimePicker 
          label={label}
          defaultValue={dayjs(defaultValue?new Date(defaultValue):new Date())}
          {...register(name,registerOption)}
          onChange={(event) => { onChange(event); }}
        />
      </LocalizationProvider>
    )} />
  )
}
