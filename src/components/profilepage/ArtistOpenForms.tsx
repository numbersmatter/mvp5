import React from 'react';
import OpenFormsPaper from './OpenFormsPaper';
import SectionHeader from './SectionHeader';
import FormsList from './FormsList';



export interface ArtistOpenFormsProps {
  artistForms: any,
  titleText: string
}

export default function ArtistOpenForms(props: ArtistOpenFormsProps){


  return (
    <>
      <OpenFormsPaper>
          <SectionHeader titleText={props.titleText}/>
          <FormsList forms={props.artistForms}  />
      </OpenFormsPaper>

    </>
  )
}