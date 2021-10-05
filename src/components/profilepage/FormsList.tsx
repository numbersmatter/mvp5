import React from 'react';
import {
  Grid, 
  Typography,
} from '@mui/material';

import FormCard from './FormCard';


export interface FormsListProps {
  forms: any,
}


export default function FormsList(props: FormsListProps ){
  const formCollection = props.forms.docs;
  

  return (
    <Grid item container direction='column' spacing={2} alignItems='center'>
      {console.log(formCollection)}
      {
        formCollection
        .filter((form:any)=>form.data().formVisable)
        .map((form:any)=>(
          <>
          {console.log(form.data())}
          <Typography>form holder</Typography>
          <FormCard form={form.data()} />
          </>
        ))
      }

    </Grid>
    
  )
}