import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import NavBar from './components/NavBar';
import BasePage from './BasePage';




export default function FurryMarket(){

  const [drawerOpen, setDrawerOpen]= useState(false)
  return (
    <div style={{backgroundImage: "url(/images/FMBg.jpg)"}}>
        {/* <CssBaseline /> */}
          <NavBar
            drawerState={drawerOpen}
            setDrawer={setDrawerOpen}
          />
          
          <BasePage/>

    </div>
  )
}
