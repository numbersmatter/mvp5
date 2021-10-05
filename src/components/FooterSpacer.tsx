import React from 'react';

import {
  Grid,
  Box,
  Typography
} from '@mui/material';


export default function FooterSpacer(){

  return (
    <div>
      <Box sx={{
        minWidth: '600px',
        minHeight: '300px',
      }}>
        <Typography> Footer Spacing</Typography>
      </Box>
    </div>
  )
}