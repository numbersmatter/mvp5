import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import NavBar from './components/NavBar';
import AuthenticatedRoute from './components/AuthenticatedRoute';

import { AuthContextProvider, useAuthState } from './firebase'
import BasePage from './BasePage';
import { CssBaseline } from '@mui/material';





function App() {
  return (
    <div style={{backgroundImage: "url(/images/FMBg.jpg)"}}>

      <AuthContextProvider>
        {/* <CssBaseline /> */}
        <Router>
          <NavBar/>
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