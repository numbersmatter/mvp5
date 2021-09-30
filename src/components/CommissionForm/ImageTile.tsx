import React from 'react';

import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from '@mui/material'

import { ImageObj } from './OrganizeFormQuestions';


export interface ImageTileProps {
  subheader?: string,
  imageArray: ImageObj[],
}
export default function ImageTile(props: ImageTileProps) {
  const testArray = Array.from(props.imageArray)
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ImageList rowHeight={280}>
          <ImageListItem key="Subheader" cols={2} style={{height: 'auto'}}>
            <ListSubheader component="div">{props.subheader}</ListSubheader>
          </ImageListItem>
          {testArray.map((tile) => (
            <ImageListItem key={tile.title}>
              <img src={tile.img} alt={tile.title} />
              <ImageListItemBar
                title={tile.title}
      
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );


};