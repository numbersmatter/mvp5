import React from 'react';

import {
  Grid,
  Typography,
} from '@mui/material'

export interface SectionHeaderProps {
  titleText: string,
}

export default function SectionHeader(props: SectionHeaderProps){
  return (
    <Grid item>
      <Typography>{props.titleText}</Typography>
    </Grid>
  )
}