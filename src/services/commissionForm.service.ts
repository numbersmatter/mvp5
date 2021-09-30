import { db } from '../firebase';

// get commission db form ref
const commFormDb = (name: string) =>{
  return db.collection('usernames').doc(name).collection('forms');
};

// get db for submitting requests
const requestDb = (requestObj: {}) =>{
  return db.collection('Requests').add(requestObj);
}

//get all forms 
const allForms = ( name: string ) => {
  return commFormDb(name);
}

// get a specific form
const getForm = (name:string, formName: string )=> {
  return commFormDb(name).doc(formName);
};

// set a specific form
const setForm = ( name: string, formName: string, formData: {}) => {
  return getForm(name, formName).set(formData);
};

// create new form
const addForm = ( name: string, formData: {}) =>{
  return commFormDb(name).add(formData);
};


// update specific form
const updateForm = ( name:string, formName: string, updateData: {}) =>{
  return getForm(name, formName).update(updateData);
};

// delete specific form
const deleteForm = ( name: string, formName: string) => {
  return getForm(name, formName).delete();
};

const submitRequest = (requestObj: {}) =>{
  return requestDb(requestObj)
}

const CommissionFormService = {
  allForms,
  addForm,
  getForm,
  setForm,
  updateForm,
  deleteForm,
  submitRequest,
};

export default CommissionFormService;
