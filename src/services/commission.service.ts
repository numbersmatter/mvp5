import { db, arrayUnion } from "../firebase";


const RequestsDb = db.collection("Requests");

// get all commission requests to artist
const getAllCommReqArtist=(artistUID: string| undefined) =>{
  return RequestsDb.where("formOwnerId", '==', artistUID)
};

// add a commission request of artist
const createCommReq = (data: {}) => {
  return RequestsDb.add(data);
};

// update commission request of artist
const updateCommReq = (id: string, value: {}) =>{
  return RequestsDb.doc(id).update(value);
};

// update commission request status
const updateCommReqStatus= ( id: string, newStatus:string) => {
  const updatedStatusObj = { status: newStatus};
  return updateCommReq(id, updatedStatusObj)
} 

// get ref to projects
const getProjectRef = (username: string) =>{
  return db.collection('usernames').doc(username).collection('projects').doc('default');
};

// add commission to project board
const addToProject = (id: string, username: string, requestData: {}) => {
return getProjectRef(username).collection('requests').doc(id).set(requestData);

}

const updateProjectColumns= (id: string, username: string ) =>{
  //const updateItem = [id];
  return getProjectRef(username).update({'columns.Queue.taskIDs': arrayUnion(id)});
}

const CommissionService = {
  getAllCommReqArtist,
  createCommReq,
  updateCommReq,
  addToProject,
  updateProjectColumns,
  updateCommReqStatus,
};

export default CommissionService;