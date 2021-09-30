import React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';


import { 
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  CardMedia 
} from '@mui/material';

import ExpandMore from '@mui/icons-material/ExpandMore';


import { red } from '@mui/material/colors';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';










export interface CommissionTypeCardProps {
  title: string,
  shortDescription: string | undefined,
  longDescription: string | undefined,
  pricingRange?: string | undefined,
  addOns?: string | undefined,
  cardImage?: string | undefined
  button?: React.ReactNode
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMoreAction = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export  const CommissionTypeCard: React.FC<CommissionTypeCardProps> = (props) => {

  const [expanded, setExpanded] = React.useState(false);

  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card >
      <CardHeader 
        action={
          props.button }
        title={props.title}
        subheader={ props.pricingRange}
        titleTypographyProps={
          {variant : 'subtitle1'}
        }
      />
      { props.cardImage &&
       <CardMedia
       image={props.cardImage}
       
       />
      }
      
      
      <CardContent >
        <Typography  variant="body1" component="p">
         Short Description: { props.shortDescription }
        </Typography>
      </CardContent>
      <CardActions  disableSpacing>
        <IconButton
          
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography > More Details:</Typography>
          <Typography paragraph>
          {props.longDescription}
          </Typography>
          <Typography >
            Add-ons:
          </Typography>
          <Typography paragraph display="inline">
            {props.addOns}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );

};

export default CommissionTypeCard;