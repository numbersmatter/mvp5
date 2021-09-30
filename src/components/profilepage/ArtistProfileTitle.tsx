import React from 'react';
import {
  Typography,
  Grid,
  Paper,
  Box,
 // Button
} from '@mui/material'

export interface ArtistProfileTitleProps {
  id: string
}


export default function ArtistProfileTitle(props : ArtistProfileTitleProps) {

  return (
    <Grid item xs={12} >
          <Paper elevation={0} style={{margin:"1em", backgroundColor:"transparent", padding:"1em"}}
          >
          <Box  style={{color: "black"}}>               
            <Typography variant="h1" >
              {props.id}
            </Typography>
            {/* <Button onClick={()=>console.log(currentUser)}>
            console profile
          </Button> */}
          </Box>
          </Paper>
        </Grid>
  )
}