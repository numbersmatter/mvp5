import React, { useContext } from 'react';
import { CurrentUser, useUserData } from './hooks';

const AuthContext = React.createContext<CurrentUser>({
  username: null,
  user: undefined,
  isAuth: false,
  userLoading: false,
  userError: undefined

});

export function useAuth(){
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const currentUser = useUserData();

  return(
    <AuthContext.Provider
        value={currentUser}
    >
        {children}
    </AuthContext.Provider>


  );
};