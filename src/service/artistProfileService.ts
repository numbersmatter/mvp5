import { dbCompat } from "../firebase";

export interface ArtistProfileType {
  artistTerms: string,
  profileImage?: string,
  quote: string,
  commissionText?: string,
  commissionOpen?: boolean,
  shopClosedImg?: string,
  shopClosedStatusText?: string 
  shopOpenImg?: string,
  shopOpenStatusText?: string,
  
  [key: string]: any
}



const artistProfileDb = dbCompat;

// get ref to artist profile
const getProfileRef = (name:string) => {
  return artistProfileDb.doc(name).collection('public').doc('profile');
};

const updateProfile = (name: string, updateData: {})=>{
  return getProfileRef(name).update(updateData);
}

const ArtistProfileService ={
  getProfileRef,
  updateProfile,
};

export default ArtistProfileService;