import React from 'react';


import {
  Typography,
  Grid,
  Paper,
  Box,
  Link,
 // Button
} from '@mui/material';

//import ArtistTermsButton from '../reuseable/TermsOfService';
//import ShopOpenCloseImage from '../reuseable/ShopOpenCloseImage';





export interface ProfileRouteParams {
};


export default function WaitList(){
  


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
          <Box  style={{color: "white"}}>               
            <Typography variant="h1" >
                Join the Wait List!
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

          <Grid 
            item  
            container 
            direction="column"
            justifyContent='center'
            alignItems='center'
            md={6} 
            xs={12} 
            >
            
          </Grid>
          
          

        </Grid>
        <Grid item>
          
         
        </Grid>
        <Grid 
          //className={}
          container
          item
          direction="column"
          justifyContent='center'
          xs={12}
          spacing={2}
          alignItems="center"
        >
          <Grid item>
            <Paper
              //className={classes.formPaper}
              elevation={5}
              style={{
                margin:"2em",
                padding:"1em",
                color:"black"
              }}
            >
              
              <Typography></Typography>
            </Paper>
          </Grid>
          <Paper 
            //className={classes.formPaper}
            elevation={5}
            style={{
              margin:"2em",
              padding:"1em",
              color:"black"
              }}
          >
            <Grid container direction='column' spacing={2}>
              <h2>Join the waitlist</h2>
            </Grid> 
          </Paper>         
        </Grid>
      </Grid>
  )
}