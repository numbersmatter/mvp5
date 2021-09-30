import React from 'react';
import {
  Button,
  Grid,
  TextField
} from '@mui/material';

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export interface DynamicImageObj {
  id: string,
  img: string,
  title: string,
}

export interface InputDynamicArrayImagesProps {
  dynamicArray: DynamicImageObj[],
  handleChange: (eve:any, ind: number) => void,
  removeItem: (ind: number) => void,
  addItem: () => void,
  nameInputOne: string,
  labelInputOne: string,
  nameInputTwo: string,
  labelInputTwo: string

}

export default function InputDynamicArrayImages(props: InputDynamicArrayImagesProps)
 {

  const classes = useStyles();
  //props needed:
  //props.dynamicarray = array of object values
  //props.handleChange = function to change values
  //props.removeItem = function to remove item
  //props.addItem = function to add an item
  

  return (
    <React.Fragment>
      <Grid className={classes.root} container spacing={2}>
      {
        props.dynamicArray.map((x, i) => {
          return (
            <Grid  key ={x.id} item xs={12} >
              <Grid 
                container 
                direction="row"
                justifyContent="flex-start"
                spacing={2}
              >
              <Grid item xs={3}>
              <TextField
              //id={x.id + 'img' + i.toString()}
              name="img"
              label={props.labelInputOne}
              value={x.img}
              onChange={e => props.handleChange(e, i)}
              />
              </Grid>
              <Grid item xs={3}>
              <TextField
              //id={x.id + 'title' + i.toString()} 
              name='title'
              label={props.labelInputTwo}
              value={x.title}
              onChange={e => props.handleChange(e, i)}
              />
              </Grid>
              <Grid item>
                 
                <Button
                  onClick={() => props.removeItem(i)}
                >Remove</Button>
                <Button onClick={()=>console.log(x)}> consolelog</Button>
              
                
              </Grid>
              </Grid>
              
              
            </Grid>
          )
          
        })
      }
      <Button onClick={props.addItem}> Add Element</Button>
      
      </Grid>
      <div style={{ marginTop: 20 }}>{JSON.stringify(props.dynamicArray)}</div>
    </React.Fragment>
  )
}