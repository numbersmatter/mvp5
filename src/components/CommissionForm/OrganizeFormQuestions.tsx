import React from 'react';
import QuestionSection from './QuestionSection';
import GroupedButton from './GroupedButton';
import { 
  DragDropContext, 
  Droppable, 
  Draggable 
} from 'react-beautiful-dnd';
import CreateQuestion from './CreateQuestion';


import {
  Button,
  Container,
  Grid,
  Paper,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
  root: {
    padding: 15,
    margin: 10,

  },
  buttonGrp: {
    margin:20,
  },
}));

export interface ImageObj {
  id: string,
  img: string,
  title: string,
}


export interface OptionsObj {
  id: string,
  text: string,
  value: string,
  price?: number
}

export interface FormQuestion {
  questionId: string,
  questionTitle: string,
  questionType: "Select" | "TextInput" | "TextArea",
  questionContext: string,
  imagesArray: ImageObj[],
  optionsArray: OptionsObj[]
  userResponse: string,
  imageSubheader?: string,
  optionPrice: number,
  
}

// TODO theres an any here
export interface OrganizeFormProps {
  formQuestions: FormQuestion[],
  updateFormInfo: (obj: FormQuestion[]) => void,
  //saveForm: (obj: {}) => void,
  buttonMenuOpts: string[],
  buttonMenuVals: string[],

}

export default function OrganizeFormQuests(props: OrganizeFormProps) 
{
  const classes = useStyles();

  const defaultFormQuestion: FormQuestion = {
    "questionId": "",
    "questionTitle": "New Section",
    "questionType": "Select",
    "questionContext": "",
    "imagesArray": [],
    "optionsArray": [],
    "userResponse": "",
    "optionPrice": 0
  }


  const handleCreateNewQuestion = (questType: "Select" | "TextInput" | "TextArea") =>{
    const newQuestionObj = defaultFormQuestion;
    newQuestionObj.questionId = btoa(Math.random().toString()).substring(0,12); 
    newQuestionObj.questionType= questType;
    const questionsList = [...props.formQuestions, newQuestionObj ];
    props.updateFormInfo(questionsList);
  }

  // loop though the questions. If the question Id matches then update with new values
  // if ids do not match just return the question as is

  // TODO fix the any!
  const handleUpdateQuestion = ( questId: string, updatedValue: any ) => {
    const questionList = [...props.formQuestions];
    const newList = questionList.map((item, ind)=>{

      if (item.questionId ===questId) {
        const newObj = {...item};
        newObj.questionTitle = updatedValue.questionTitle;
        newObj.imagesArray= updatedValue.imagesArray;
        newObj.optionsArray = updatedValue.optionsArray;
        newObj.questionContext= updatedValue.questionContext;

        return newObj;
      }
      return item;
    })

    props.updateFormInfo(newList);
  };

  // TODO another any to get rid of 
/*   const handleClickSave = (updatedInfo:any ) =>{
    props.saveForm(updatedInfo);
  }; */

  // TODO get rid of the anys! any any is bad!
  function handleOnDragEnd(result: any) {
    if (!result.destination) return;
    const items = Array.from(props.formQuestions);
    const [reorderedItems] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderedItems);

    props.updateFormInfo(items);
  }

  const handleQuestionRemove = (ind: number) => {
    const items = Array.from(props.formQuestions);
    items.splice(ind, 1);

    props.updateFormInfo(items);
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.root} elevation={3}>
        <Grid container>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="formSectionsHolder">
              {(provided) => (
                <Grid container direction="column" spacing={2} {...provided.droppableProps} ref={provided.innerRef}>
                  {props.formQuestions.map((obj, index) => (
                    <Draggable key={obj.questionId} draggableId={obj.questionId} index={index}>
                      {(provided) => (
                        <Grid item {...provided.draggableProps}  {...provided.dragHandleProps} ref={provided.innerRef}>
                          <QuestionSection 
                            questionTitle={obj.questionTitle}
                            questionType={obj.questionType}
                            questionId={obj.questionId} 
                            questionContext={obj.questionContext}
                            editQuestionDetails={ 
                              <CreateQuestion
                                questionTitle={obj.questionTitle}
                                questionType={obj.questionType}
                                questionId={obj.questionId} 
                                imagesArray={obj.imagesArray}
                                questionContext={obj.questionContext}
                                optionsArray={obj.optionsArray}
                                handleUpdateQuestion={handleUpdateQuestion}
                              />
                            }
                            removeSection={
                              <Button 
                                onClick={()=>handleQuestionRemove(index)}
                              >
                                Remove
                              </Button>
                            }

                          />

                        </Grid>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>
          <Grid className={classes.buttonGrp} container item xs={12}>
            <GroupedButton
              handleGroupButtonClick = {handleCreateNewQuestion}
              groupedMenuOptionText = {props.buttonMenuOpts}
              groupedMenuValues= {props.buttonMenuVals}
              
            />
            <Button onClick={()=>{console.log(props.formQuestions)}}>
            log form sections
            </Button>
            {/* <Button
              onClick={(formInfo)=>handleClickSave(formInfo)}
            >
              Save Commission Info
            </Button> */}
            
          </Grid>

        </Grid>
      </Paper>
    </Container>
  )
}