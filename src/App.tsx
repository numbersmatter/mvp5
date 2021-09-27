import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';

import FurryMarket from './FurryMarket'


export const history = createBrowserHistory();

function App() {
  return (
    <AuthProvider>
      <Toaster/>
      <Router history= { history } >
        <FurryMarket />
      </Router>
    </AuthProvider>
    
  );
}

export default App;