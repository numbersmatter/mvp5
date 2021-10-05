import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import NavBar from './components/NavBar';
import BasePage from './BasePage';
import FooterSpacer from './components/FooterSpacer'




export default function FurryMarket(){

  const [drawerOpen, setDrawerOpen]= useState(false)
  return (
    <div >
        {/* <CssBaseline /> */}
          <NavBar
            drawerState={drawerOpen}
            setDrawer={setDrawerOpen}
          />
          
          <BasePage/>
          <FooterSpacer />

    </div>
  )
}
