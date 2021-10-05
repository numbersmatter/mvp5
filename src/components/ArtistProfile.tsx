import React from 'react';



import {
  useParams
} from 'react-router-dom';
import {
  Typography,
  Grid,
  Paper,
  Box,
  Link,
 // Button
} from '@mui/material'

import { 
  useCollection, 
  useDocumentData 
} from 'react-firebase-hooks/firestore';

import ArtistProfileService from '../service/artistProfileService';
import CommissionFormService from '../services/commissionForm.service';
import ArtistProfileTitle from './profilepage/ArtistProfileTitle';


import ArtistLinks from './profilepage/ArtistLinks';
import ArtistShopStatus from './profilepage/ArtistProfileShopStatus';
import ArtistTerms from './profilepage/ArtistTerms';
import ArtistForms from './profilepage/ArtistForms';
import ArtistImage from './profilepage/ArtistImage'
import ArtistOpenForms from './profilepage/ArtistOpenForms';






export interface ProfileRouteParams {
  userName?: string,
};


export default function ArtistProfile(props: ProfileRouteParams){
  const classes = {};
  let { id} = useParams<{id: string}>();


  
  const [artistData, loading, error]= useDocumentData( 
    ArtistProfileService.getProfileRef("milachu92")
  )

  const [artistForms, formsLoading, formsError ]= useCollection(
    CommissionFormService.allForms(id)
  );

  

  if(loading) {
    return (
      <h2>Loading...</h2>
    )
  }




  return (
    
      <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {console.log(artistData)}
        {console.log(id)}
        <ArtistProfileTitle id={id} />
        <ArtistImage image={artistData.profileImage} qoute={artistData.quote} />
        <ArtistLinks artLinks={artistData.artistLinks} />
        <ArtistShopStatus 
          commissionsOpen={artistData.commissionsOpen}
          shopOpenImg={artistData.shopOpenImg}
          shopClosedImg={artistData.shopClosedImg}
          shopOpenStatusText={artistData.shopOpenStatusText}
          shopClosedStatusText={artistData.shopClosedStatusText}
        />
        <ArtistTerms terms={artistData.artistTerms} />
        
        <ArtistForms forms={artistForms} loading={formsLoading} error={formsError}
          artist={id} artistProfile={artistData}
        />
        
        
      </Grid>
  )
}