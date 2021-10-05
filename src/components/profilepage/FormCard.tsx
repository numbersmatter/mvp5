import React from 'react';
import ExpandingCard from '../CommissionForm/ExpandingCard';

import { 
  Grid, 
} from '@mui/material';



export interface FormCardProps {
  form:any
}


export default function FormCard(props: FormCardProps){

  return (
    <Grid item key={props.form.id} >
       <ExpandingCard form={props.form } />
    </Grid>
  )
}