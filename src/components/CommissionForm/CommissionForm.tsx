import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@mui/styles'
import {
  AppBar,
  Paper,
  Toolbar,
  Stepper,
  Step,
  StepContent,
  StepLabel,
  Button,
  Typography,
  Dialog,
  IconButton,
} from '@mui/material';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { FormQuestion } from './OrganizeFormQuestions';
import QuestionStep from './QuestionStep';
//import CommissionFormService from '../../services/commissionForm.service';
import CommissionService from '../../services/commission.service'
import { serverTimestamp } from '../../firebase';
import toast from 'react-hot-toast';




const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    /* marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    }, */
  },
  paper: {
   /*  marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    }, */
  },
  stepper: {
   
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
  
  },
}));

export interface CommissionFormProps {
  formQuestions: FormQuestion[],
  userUID: string | undefined,
  username: string | undefined | null,
  commissionedArtist: string,
  commissionFormId: string,
  commissionFormTitle: string,
  formOwnerId: string,
  formOpen: boolean,
  commissionButtonText: string,
}


export default function CommissionForm(props: CommissionFormProps) {
  const classes = useStyles();
  //const initialFormValues = props.formQuestions
  const [open, setOpen] = useState(false);
  const [formResp, setFormResp] = useState(props.formQuestions);

  const getPrice = (questArray: FormQuestion[], ind: number, val:string) =>{
    const questOptions = questArray[ind]?.optionsArray;
    let priceValue =0;
    questOptions.forEach((option)=> {
      if (option.value === val && option.price) {
        priceValue= option.price
      }
    })
    return priceValue;
  }

  const noUserId = (userID: string | undefined| null) =>{
    if(!userID) {
      return "Anonomous User"
    }

    return userID
  }



  const handleRespChange = (e: any, index: number) => {
    const { value } = e.target;
    const list = [...formResp];
    
    list[index]["optionPrice"] = getPrice(list, index, value)
    list[index]["userResponse"] = value;
    
    setFormResp(list);
  };
 
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //variables for stepper 
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const resetForm = () =>{
    setFormResp(props.formQuestions);
    setActiveStep(0);
    toast.success('Request submitted', );
  };

  interface FormDetailsType {
    Title: string,
    requestorId?: string,
    commissionedArtist: string,
    requestor?: string | null,
    commissionFormId: string
    formOwnerId: string
  }
  const formDetails ={
    Title: props.commissionFormTitle,
    requestorId:  noUserId (props.userUID),
    commissionedArtist: props.commissionedArtist,
    requestor: noUserId(props.username),
    commissionFormId: props.commissionFormId,
    formOwnerId: props.formOwnerId
  };

// TODO ensure with security rules you can only submit a request if the requestor name matches the name of the submitter
  const handleFormSubmit = async (formResp: {}, requestObj: FormDetailsType) => {
    const formSubmission = {
      formResp,
      "favorited": false,
      "formOwnerId": requestObj.formOwnerId,
      "commissionedArtist": requestObj.commissionedArtist,
      "commissionType": requestObj.Title,
      "requestorId" : requestObj.requestorId,
      "requestor": requestObj.requestor,
      "timeCreated": serverTimestamp(),
      "timeUpdated": serverTimestamp(),
      "status": "Under Review",
      "commissionFormId": requestObj.commissionFormId
    }
    CommissionService.createCommReq(formSubmission);
    resetForm();
    handleClose();

  };

  return (
    <div>
      <Button  disabled={!props.formOpen} variant="outlined" color="primary" onClick={handleClickOpen}>
       {props.commissionButtonText}
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseRounded />
            </IconButton>
            <Typography variant="h6" >
              Commission Artist {props.commissionedArtist}
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Commission Details
          </Typography>
          {/* <Button onClick={()=>console.log(formResp)}>form props </Button>
          <Button onClick={()=>console.log(initialFormValues)}>Props </Button> */}
          <Stepper activeStep={activeStep} className={classes.stepper} orientation="vertical">
            {formResp.map((question, stepIndex) => (
              <Step key={question.questionId}>
                <StepLabel>{question.questionTitle}</StepLabel>
                <StepContent>
                  {/* TODO get rid of the any */}
                  <QuestionStep
                    questionId={question.questionId}
                    questionTitle={question.questionTitle}
                    questionType={question.questionType}
                    optionsArray={question.optionsArray}
                    imagesArray={question.imagesArray}
                    imageSubheader={question.imageSubheader}
                    questionContext={question.questionContext}
                    userResponse={question.userResponse}
                    handleChange={(e: any)=>{handleRespChange(e, stepIndex)}} />
                  <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  {activeStep !== formResp.length-1 &&
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                      Next
                  </Button>}
                  {activeStep === formResp.length - 1  && (
                    <Button onClick={()=>handleFormSubmit( formResp, formDetails)} className={classes.button}>
                      Create Submission
                    </Button>
                  )}
                </div>
                </StepContent>
                
              </Step>
            ))}
          </Stepper>
        </Paper>
      </main>
      </Dialog>
    </div>
  )
}