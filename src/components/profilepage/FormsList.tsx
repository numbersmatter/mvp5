import React from 'react';
import {
  Grid, 
} from '@mui/material';

import FormCard from './FormCard';


export interface FormsListProps {
  forms: any,
}


export default function FormsList(props: FormsListProps ){

  return (
    <Grid item>
      {
        props.forms
        .filter((form:any)=>form.data().formVisible)
        .map((form:any)=>(
          <FormCard form={form.data()} />
        ))
      }

    </Grid>
    
  )
}