import { Typography } from '@mui/material'
import React from 'react'
import { LogoutButton } from '../../../../components/LogoutButton/LogoutButton'

export const IsLogined = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
        <Typography variant="h2" style={{marginBottom:"1em"}}>
            You already logged!
        </Typography>
        <LogoutButton/>
    </div>
  )
}
