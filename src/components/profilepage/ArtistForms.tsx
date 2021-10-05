import React from 'react';
import firebase from 'firebase/compat';
import { 
  Grid, Paper, Typography 
} from '@mui/material';

import CommissionTypeCard from '../CommissionForm/CommissionTypeCard';
import ExpandingCard from '../CommissionForm/ExpandingCard';
import CommissionForm from '../CommissionForm/CommissionForm';
import { useAuth } from '../../context/AuthContext';
import ArtistOpenForms from './ArtistOpenForms';

export interface ArtistFormsProps {
  forms: any,
  loading: boolean,
  error: firebase.FirebaseError | undefined,
  artist: string,
  artistProfile: any
}


export default function ArtistForms(props: ArtistFormsProps){

  const currentUser = useAuth();

  if(props.loading) {
    return (
      <Grid item>
        <h3>Forms Loading</h3>
      </Grid>
    )
  }

  if(!props.forms) {
    return (
      <Grid item>
        <h3>Artist has no forms</h3>
      </Grid>
    )
  }

  if(props.error){
    return (
      <>
      <h4>Error Detected
      </h4>
      {console.log(props.error)}
      </>
    )
  }
  
  return (
    <Grid item 
    >
      <ArtistOpenForms artistForms={props.forms} titleText="Artist Forms"/>
    </Grid>
  )
}