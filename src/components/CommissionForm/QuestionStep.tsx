import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  TextField,
  MenuItem,
  Typography
} from '@mui/material';
import ImageTile from './ImageTile';
import { ImageObj, OptionsObj } from './OrganizeFormQuestions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '20px',
      width: '25ch',
    },
  },
}));

export interface QuestionStepProps{
  questionId: string,
  questionTitle: string,
  questionType: "Select"| "TextInput"| "TextArea",
  optionsArray: OptionsObj[],
  imagesArray: ImageObj[],
  imageSubheader?: string,
  questionContext: string,
  userResponse: string,
  handleChange: (e: any) =>void, 
};

export default function QuestionStep (props: QuestionStepProps) {
  const classes = useStyles();
  const questionTypes = (type: string)=> {
    if(type ==="Select") {
      return (<form 
       noValidate
        autoComplete="off"
        className={classes.root}
      > 
        <TextField
          id= {props.questionId}
          select
          value={props.userResponse}
          onChange={props.handleChange}
        >
          {  props.optionsArray.map((option) => (
            <MenuItem key={option.text} value={option.value} > {option.text}</MenuItem>
          )) } 
        </TextField>
    </form>);
    }

    if (type === "TextInput") {
      return (
        <TextField 
        id={props.questionId}
        fullWidth={true}
        value={props.userResponse}
        onChange={props.handleChange}
        variant="outlined"
      />
      );
    }

    if (type === "TextArea") {
      return (
        <TextField
        id={props.questionId}
        multiline
        fullWidth={true}
        minRows={6}
        maxRows={15}
        value={props.userResponse}
        onChange={props.handleChange}
        variant="outlined"
        />
      );
    }
  }
     
 

  const ImagesSection = (imgs: ImageObj[], imgSubheader: string | undefined) =>{
    if (imgs) {
      return <ImageTile
        subheader={imgSubheader}
        imageArray={imgs}
      />
    }
    return null;
  };

  return (
    <React.Fragment>
       <Typography>
        {props.questionContext}
      </Typography>
      {ImagesSection(props.imagesArray, props.imageSubheader)}
      {questionTypes(props.questionType)}
    </React.Fragment>
  );
}
