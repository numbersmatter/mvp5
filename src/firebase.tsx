import { getAuth, onAuthStateChanged, AuthError } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { User } from '@firebase/auth'
import { useState, useEffect, useContext, createContext } from 'react'


export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAmx2YFYy6e1tgBgW9gsbyjRudidRgKvfk",
  authDomain: "art-market-production.firebaseapp.com",
  projectId: "art-market-production",
  storageBucket: "art-market-production.appspot.com",
  messagingSenderId: "295051557281",
  appId: "1:295051557281:web:7e6a6a88345eba27cf33e0",
  measurementId: "G-NWFW97W8JC"
})

export interface CurrentUser {
  username: string | undefined | null,
  user: User | undefined | null,
  isAuth: boolean,
  userLoading: boolean,
  userError?: AuthError| undefined,
}

export const AuthContext = createContext<CurrentUser>({
  username: null,
  user: undefined,
  isAuth: false,
  userLoading: false,
  userError: undefined

});

export const AuthContextProvider = (props: any) => {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(firebaseApp), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}