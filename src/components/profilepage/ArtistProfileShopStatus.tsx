import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';




export interface ShopOpenCloseProps{
  commissionsOpen?: boolean,
  shopOpenImg?: string,
  shopClosedImg?: string,
  shopOpenStatusText?: string,
  shopClosedStatusText?: string,
};

export default function ArtistShopStatus(props: ShopOpenCloseProps){

  if(props.commissionsOpen){
    return(
      <>
      <Grid item>

      <img width={300} src={props.shopOpenImg} alt="shop status"/>
      <Typography>{props.shopOpenStatusText} </Typography>
      </Grid>
      </>
    )
  }

  return (
    <>
      <img width={300} src={props.shopClosedImg} alt="shop status"/>
      <Typography>{props.shopClosedStatusText} </Typography>
      </>
  )
}