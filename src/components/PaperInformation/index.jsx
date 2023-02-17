import { Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const PaperInformation = ({userState}) => {

const { public_repos, followers, following } = userState
      
const userInformation = [
    { title: 'Public Repos', value: public_repos },
    { title: 'Followers', value: followers },
    { title: 'Following', value: following },
  ]
  return (
    <>
        <Paper elevation={3}>
            <Stack
            sx={{ py: 2 ,
            justifyContent:'space-around',
            alignItems:'center'
            }}
            direction={{ xs: 'column', md: 'row' }}
            
            spacing={2}
            >
                {userInformation.map(({ title, value }) => (
                    <Stack key ={title} spacing={1} textAlign="center">
                    <Typography component="h3" variant="h5">{title}</Typography>
                    <Typography component="h4" variant="h6">{value}</Typography>
                    </Stack>
                ))}
            </Stack>

        </Paper>
    </>
  )
}

export default PaperInformation