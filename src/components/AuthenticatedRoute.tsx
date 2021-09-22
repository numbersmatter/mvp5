import React, { ReactChildren } from 'react';
import { AuthContextProvider, useAuthState } from '../firebase';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

export interface AuthenticatedRouteProps {
  component: ReactChildren,
  routeProps: {
    [key: string] : any
  },
}

export default function AuthenticatedRoute(props: AuthenticatedRouteProps){
  const { isAuthenticated } = useAuthState()

  return (
    <Route
      {...props.routeProps}
      
    > 
      {isAuthenticated ? props.component : <Redirect to="/login"/>}
      
    
    </Route>
  )
}