import { db } from "../firebase";

const userdb = db.collection('users');

// get user ref
const getUserRef = (uid: string | undefined | null ) => {
  const userInfo = (userObj: any )=>{
    if (userObj === null ) {
      return undefined
    }

    return userObj
  } 
  return userdb.doc(userInfo(uid))
};


const UserService = {
  getUserRef,
};

export default UserService;
