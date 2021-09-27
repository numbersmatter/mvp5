import { auth } from '../firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import  firebase  from '../firebase';
import UserService from '../services/user.service';


/* export interface UserDoc {
  displayname?: string,
  photoURL?: string,
  username?: string,
  [key: string]: any,
} */

export interface CurrentUser {
  username: string | undefined | null,
  user: firebase.User | undefined | null,
  isAuth: boolean,
  userLoading: boolean,
  userError?: firebase.auth.Error | undefined,
  noUsername?: boolean
}

// Custom hook to read current user's data from user collection doc
export function useUserData() {
  const [user, userLoading, userError ] = useAuthState(auth);
  const [ isAuth, setIsAuth ] = useState<boolean>(false); 
  const [noUsername, setNoUsername] = useState<boolean>(false)
  const [username, setUsername ]= useState<string | undefined | null>(null);


  useEffect(()=>{
    let unsubcribe= () => console.log('no user'); 
    const fetchUsername = async (value: string)=>{
     // let docData="";
      const ref = UserService.getUserRef(value);
      const docData =await ref.get();

      if(docData.data()?.username){
        setUsername(docData.data()?.username)
      }

      if(!docData.data()?.username){
        setNoUsername(true)
      }
    };
    

    if (user) {
      fetchUsername(user.uid)
      setIsAuth(true);
    }else {
      setUsername(undefined);
      setIsAuth(false)
    }
    return () =>{
      console.log("return function")
      unsubcribe()
      
    }
    
    
  }, [user]);


  
  return { user, username, isAuth, userError, userLoading, noUsername };
};