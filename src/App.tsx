import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import NavBar from './components/NavBar';
import DrawerMenu from './components/DrawerMenu';
import AuthenticatedRoute from './components/AuthenticatedRoute';

import { AuthContextProvider, useAuthState } from './firebase'
import BasePage from './BasePage';
import { CssBaseline } from '@mui/material';





function App() {
  const [drawerOpen, setDrawerOpen]= useState(false)
  return (
    <div style={{backgroundImage: "url(/images/FMBg.jpg)"}}>

      <AuthContextProvider>
        {/* <CssBaseline /> */}
        <Router>
          <NavBar
            drawerState={drawerOpen}
            setDrawer={setDrawerOpen}
          />
          
          <BasePage/>

        </Router>
      </AuthContextProvider>
    </div>
  )
}

/* function PageOne(){
  const propsForRoute = {
    'exact': true,
    'path': '/'
  }

  return (
    <AuthenticatedRoute routeProps={propsForRoute}>
      <h1>Hola Como Esta</h1>
    </AuthenticatedRoute>
  )
} */

export default App