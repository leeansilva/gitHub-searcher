import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';
import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';

const LocationInformation = ({ userState }) => {

const {location, twitter_username,blog,company} = userState

const userInformation = [
    { title: 'Location', value: location },
    { title: 'Twitter', value: twitter_username },
    { title: 'Blog', value: blog },
    { title: 'Company', value: company}
  ]
  return (
    <Grid container sx={{marginTop:'10px',direction:'row'}} spacing={2}>
      <Grid item xs={6}>
        <Stack>
          <LocationOnIcon/>
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <a href={`https://twitter.com/${twitter_username}`}>
          <TwitterIcon/>
          {twitter_username !== null
            ? <Typography>@{twitter_username}</Typography>
            : <Typography>Not Available</Typography>
          }
        </a>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <LanguageIcon/>
          {blog !== null
            ? <a target="_blank" href={`${blog}`}>
            <Typography>{blog}</Typography>
              </a>
            : <Typography>Not Available</Typography>
          }
          
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon />
          {company !== null
            ? <Typography>{company}</Typography>
            : <Typography>Not Available</Typography>
          }
        </Stack>
      </Grid>
    </Grid>
  )
}

export default LocationInformation