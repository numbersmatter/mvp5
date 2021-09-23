import React from 'react';



import {
  useParams
} from 'react-router-dom';
import {
  Typography,
  Grid,
  Paper,
  Box,
  Link,
 // Button
} from '@mui/material'








export interface ProfileRouteParams {
  userName?: string,
};


export default function ArtistProfile2(props: ProfileRouteParams){
  const classes = {};
  const params = props.userName;
  






  return (

      <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} >
          <Paper elevation={0} style={{margin:"1em", backgroundColor:"transparent", padding:"1em"}}
          >
          <Box  style={{color: "black"}}>               
            <Typography variant="h1" >
                {params} Test text
            </Typography>
            {/* <Button onClick={()=>console.log(currentUser)}>
            console profile
          </Button> */}
          </Box>
          </Paper>
        </Grid>
        <Grid 
        container
        item
        xs={12}
        direction="row"
        justifyContent="center"
        spacing={1}
        >
          <h3> some text</h3>

          
        </Grid>
      </Grid>
  )
}