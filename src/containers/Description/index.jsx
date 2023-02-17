import { Stack, Typography } from '@mui/material'
import React from 'react'
import LocationInformation from '../../components/LocationInformation'
import PaperInformation from '../../components/PaperInformation'

const Description = ({ userState }) => {
    const { bio } = userState
  return (
    <>
        <Stack sx={{justifyContent: 'center'}}>
            {bio !== null ? <Typography>{bio}</Typography>
            :<Typography>Not Bio Here.</Typography>}
        </Stack>
        <PaperInformation userState={userState} />
        <LocationInformation userState={userState}/>
    </>
  )
}

export default Description