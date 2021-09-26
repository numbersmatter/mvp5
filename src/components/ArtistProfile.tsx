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

import { 
  useCollection, 
  useDocumentData 
} from 'react-firebase-hooks/firestore';

import ArtistProfileService from '../service/artistProfileService';








export interface ProfileRouteParams {
  userName?: string,
};


export default function ArtistProfile(props: ProfileRouteParams){
  const classes = {};
  const params = useParams();
  
  const [artistData, loading, error]= useDocumentData( 
    ArtistProfileService.getProfileRef("milachu92")
  )

  console.log(params);

  if(loading) {
    return (
      <h2>Loading...</h2>
    )
  }




  return (
    
      <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {console.log(artistData)}
        <Grid item xs={12} >
          <Paper elevation={0} style={{margin:"1em", backgroundColor:"transparent", padding:"1em"}}
          >
          <Box  style={{color: "black"}}>               
            <Typography variant="h1" >
                 Test text
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