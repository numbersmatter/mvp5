import React from 'react';
import firebase from 'firebase/compat';
import { 
  Grid, Paper, Typography 
} from '@mui/material';

import CommissionTypeCard from '../CommissionForm/CommissionTypeCard';
import ExpandingCard from '../CommissionForm/ExpandingCard';
import CommissionForm from '../CommissionForm/CommissionForm';
import { useAuth } from '../../context/AuthContext';

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
    <Grid item>
      <h3>Forms</h3>
      <Paper>
        <Grid container spacing={2}>
          <Grid item>
            <Typography>listing forms</Typography>
          </Grid>
        {console.log(props.forms.docs)}
        { 
          props.forms.docs
          /* .filter((form:any)=>form.data().formVisible) */
          .map((form:any)=> (                   
            <Grid item key={form.id} >
              <Typography>This is form</Typography>
              {console.log(form.data().cardImage)}
              <ExpandingCard form={form.data() } />
              {/* <CommissionTypeCard 
                title={form.data().Title}
                shortDescription={form.data().shortDescription}
                longDescription= {form.data().longDescription}
                pricingRange={form.data().pricingRange}
                cardImage={form.data().cardImage}
                button={<CommissionForm 
                    formQuestions= {form.data().formQuestions}
                    userUID= {currentUser.user?.uid}
                    username={currentUser.username}
                    commissionedArtist={props.artist}
                    commissionFormId={form.id}
                    formOwnerId={form.data().formOwnerId}
                    commissionFormTitle={form.data().Title}
                    formOpen={form.data().formOpen}
                    commissionButtonText={props.artistProfile.commissionText}
                  /> }
              /> */}
            </Grid>
        ))
         }
        </Grid>
      </Paper>

    </Grid>
  )
}