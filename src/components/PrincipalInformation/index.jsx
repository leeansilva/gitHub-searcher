import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const PrincipalInformation = ({ userState }) => {
    const { name,login,created_at } = userState

  return (
    <>
        <Stack>
            <Typography>{ name }</Typography>
            <Typography>{ created_at }</Typography>
        </Stack>
            <Typography>{ login }</Typography>
    </>
  )
}

export { PrincipalInformation } 