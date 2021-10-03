import React from 'react';

import {
  Paper,
  Grid,
} from '@mui/material'

export interface OpenFormsPaperProps {
  children: React.ReactNode
}


export default function OpenFormsPaper(props : OpenFormsPaperProps){

  return (
    <Paper
      sx={{

      }}
    >
      <Grid container>
        {props.children}
      </Grid>
    </Paper>
  )
}