import React from 'react';
import {
  Grid,
  Typography,
  Box,
  Link,
} from '@mui/material';

export interface ArtLink {
  link?: string,
  site?: string,
  userIdText?: string
}

export interface ArtistLinksProps{
  artLinks: Array<ArtLink>,
}

export default function ArtistLinks(props: ArtistLinksProps ){

  return(
    <Grid container item xs={6}  direction="column" justifyContent="center" alignItems="center">
      {
        props.artLinks.map((link:any, ind: number)=>(
          <Grid item key={link.site + ind.toString() }>
            <Box textAlign="center" m={1}>
              
              <Typography>{link.site}:</Typography>
              <Link href={link.link}>{link.userIdText}</Link> 
            </Box>
          </Grid>
        ))
      }
    </Grid>
  )
}



