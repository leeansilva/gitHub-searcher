import { Avatar, CardMedia, Grid } from '@mui/material';
import React from 'react'
import Description from '../../containers/Description/index.jsx';
import { PrincipalInformation } from '../PrincipalInformation/index.jsx'
const UserCard = ({ userState }) => {
  const { avatar_url } = userState

  return (
    <Grid container spacing={2}>
        <Grid item xs={3}>
        <Avatar
          alt='gitHub user'
          src={avatar_url}
          sx={{
            width: "100%",
            height: "auto",
          }}
 />
        </Grid>
        <Grid item xs={9}>
            <PrincipalInformation userState={userState}></PrincipalInformation>
        </Grid>
        <Description userState={userState}></Description>
    </Grid>
  )
}

export default UserCard