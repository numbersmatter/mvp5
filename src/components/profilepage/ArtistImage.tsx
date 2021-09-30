import React from 'react';
import { 
  Grid,
  Typography
} from '@mui/material';


export interface ArtistImageProps {
  image: string,
  qoute: string
}

export default function ArtistImage(props: ArtistImageProps){

  return (
    <Grid 
      item  
      container 
      direction="column"
      justifyContent='center'
      alignItems='center'
      md={6} 
      xs={12} 
    >
      <img width={300} src={props.image} alt="artist profile"/>
      <Typography>{props.qoute}</Typography>
    </Grid>
  )
}



