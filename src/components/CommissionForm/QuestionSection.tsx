import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DragHandleIcon from '@mui/icons-material/DragHandle';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 12,
  },
});

export interface QuestSectProps {
  questionTitle: string,
  questionType: string,
  questionId: string,
  questionContext: string,
  editQuestionDetails: React.ReactNode,
  removeSection: React.ReactNode,
}

export default function QuestionSection(props: QuestSectProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        avatar={<DragHandleIcon/>}
        title={props.questionTitle}
        subheader={props.questionType}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {props.questionContext}
        </Typography>
      </CardContent>
      <CardActions>
        {props.editQuestionDetails}
        {props.removeSection}
      </CardActions>
    </Card>
  );
}
