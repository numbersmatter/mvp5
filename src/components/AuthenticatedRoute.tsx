import React, { ReactChildren, ReactNode } from 'react';
import { AuthContextProvider, useAuthState } from '../firebase';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

export interface AuthenticatedRouteProps {
  children: ReactNode,
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
      {isAuthenticated ? props.children : <Redirect to="/login"/>}
      
    
    </Route>
  )
}