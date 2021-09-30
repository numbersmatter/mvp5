import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import InputDynamicArray from './InputDynamicArray';
import InputDynamicArrayImages from './InputDynamicArrayImages';
import { ImageObj, OptionsObj } from './OrganizeFormQuestions';

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
  TextField
} from '@mui/material';

import Close from '@mui/icons-material/Close';





const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'green',
  },
  layout: {
    width: 'auto',
   
  },
  paper: {
    
  },
  stepper: {
    padding: 3,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {

  },
}));
const selectSteps = [
  'Enter Question Title', 'Enter Context Text',
  'Add Images', 'Add Selectable Options'
];

const textSteps = [
  'Enter Question Title', 'Enter Context Text',
  'Create Text Input'
]

export interface CreateQuestionProps{
  questionId: string,
  handleUpdateQuestion: (eve: any, updateObj: any)=>void,
  questionType: "Select" | "TextInput" | "TextArea",
  questionTitle: string,
  questionContext:string,
  imagesArray: any,
  optionsArray: OptionsObj[],

}

/* function getProperty<T, K extends keyof T>(obj: T, key: K){
  return obj[key];
} */

export default function CreateQuestion(props: CreateQuestionProps)
{

  const possibleSteps = {
    "Select": selectSteps,
    "TextInput": textSteps,
    "TextArea": textSteps,
  }

  const steps = possibleSteps[props.questionType];

  // variables for dialogue
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  //variables for Input form
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  //hold state
  const [questionTitleInput, setQuestionTitleInput] = useState(props.questionTitle);
  const [contextInput, setContextInput] = useState(props.questionContext);

  // TODO fix these anys
  const [imageList, setImageList] = useState<any>(props.imagesArray);
  const [optionsList, setOptionsList] = useState<any>(props.optionsArray);

  //handle Tile Change
  const handleImagesChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
   // TODO fix any type 
    const list: any = [...imageList];

    list[index][name] = value;
    setImageList(list)
  }
  const handleImagesRemove = (index: number) => {
    const list = [...imageList];
    list.splice(index, 1);
    setImageList(list);
  }
  const handleImagesAdd = () => {
    setImageList([...imageList, { id:btoa( Math.random().toString()).substring(0,12), img: "", title: "" }])
  }

  //handle changes to the available options
  const handleOptionChange = (e: ChangeEvent<HTMLInputElement> , index: number) => {
    const { name, value } = e.target;
    const list: any = [...optionsList];
    list[index][name] = value;
    setOptionsList(list)
  }

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement> , index: number) => {
    const { name, value } = e.target;
    const list: any = [...optionsList];
    list[index][name] = parseFloat( value);
    setOptionsList(list)
  }

  

  //handle removing an option
  const handleRemoveOption = (index: number) => {
    const list = [...optionsList];
    list.splice(index, 1);
    setOptionsList(list);
  }

  //handle adding option
  const handleAddOption = () => {
    setOptionsList([...optionsList, { id: btoa(Math.random().toString()).substring(0,12), value: "", text: "" , price:0}]);
  }

  const handleSaveInput = ( questTitle: string, questContext: string, imgList: ImageObj[], optList: OptionsObj[]  ) => {
    const tempInputObject = {
      "questionTitle": questTitle,
      "optionsArray": optList,
      "imagesArray": imgList,
      "questionContext": questContext
    };
    console.log(tempInputObject);
    props.handleUpdateQuestion(props.questionId, tempInputObject);
    handleClose();
  }

  const stepPath: any = {

    "Select": {
      0: <TextField
        id="questionTitle"
        label="Enter Question Title"
        value={questionTitleInput}
        name="questionTitle"
        fullWidth
        onChange={(event) => {
          setQuestionTitleInput(event.target.value)
        }}
      />,
      1: <TextField
        id="inputContext"
        label="add any needed context"
        value={contextInput}
        name="contextText"
        fullWidth
        multiline
        minRows={2}
        maxRows={16}
        onChange={(event) => {
          setContextInput(event.target.value)
        }}
      />,
      2: <InputDynamicArrayImages
        dynamicArray={imageList}
        handleChange={handleImagesChange}
        removeItem={handleImagesRemove}
        addItem={handleImagesAdd}
        nameInputOne="img"
        labelInputOne="Enter URL"
        nameInputTwo="title"
        labelInputTwo="Enter Img Title"
      />,
  
      3: <InputDynamicArray
        handlePriceChange={handlePriceChange}
        dynamicArray={optionsList}
        handleChange={handleOptionChange}
        removeItem={handleRemoveOption}
        addItem={handleAddOption}
        nameInputOne="value"
        labelInputOne="Enter Value"
        nameInputTwo="text"
        labelInputTwo="Enter Option Text"
        labelInputThree="Enter Price"
        nameInputThree="price"
      />
    },
    "TextInput": {
      0: <TextField
      id="questionTitle"
      label="Enter Question Title"
      value={questionTitleInput}
      name="questionTitle"
      fullWidth
      onChange={(event) => {
        setQuestionTitleInput(event.target.value)
      }}
      />,
      1: <TextField
        id="inputContext"
        label="add any needed context"
        value={contextInput}
        name="contextText"
        multiline
        minRows={2}
        maxRows={16}
        fullWidth
        onChange={(event) => {
          setContextInput(event.target.value)
        }}
      />,
      2: <TextField
        id="placeholder"
        label="additional context"
        value="placeholder"
        name="placeholder"
        fullWidth
  
      />,
    },
    "TextArea": {
      0: <TextField
      id="questionTitle"
      label="Enter Question Title"
      value={questionTitleInput}
      name="questionTitle"
      fullWidth
      onChange={(event) => {
        setQuestionTitleInput(event.target.value)
      }}
      />,
      1: <TextField
        id="inputContext"
        label="add any needed context"
        value={contextInput}
        name="contextText"
        multiline
        minRows={2}
        maxRows={16}
        fullWidth
        onChange={(event) => {
          setContextInput(event.target.value)
        }}
      />,
 /*      2: <TextField
        id="placeholder"
        label="additional context"
        value="placeholder"
        name="placeholder"
        fullWidth
  
      />, */
    }
  }
  

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Question
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <Close />
            </IconButton>
            <Typography variant="h6" >
              Editing Question Details
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Question Details
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper} orientation="vertical">
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                  <StepContent>
                    {/* getStepContent(activeStep) */}
                    {
                      stepPath[props.questionType ][activeStep]
                    }
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      {activeStep !== steps.length - 1 &&
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          Next
                        </Button>}
                      {activeStep === steps.length - 1 && (
                        <Button onClick={() => handleSaveInput(questionTitleInput, contextInput, imageList, optionsList)} className={classes.button}>
                          Save Input
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
  );

}