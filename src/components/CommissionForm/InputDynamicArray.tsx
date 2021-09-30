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

export interface DynamicObj {
  id: string,
  value: string,
  text: string,
  price: number
}

export interface InputDynamicArrayProps {
  dynamicArray: DynamicObj[],
  handleChange: (eve:any, ind: number) => void,
  handlePriceChange: (eve:any, ind: number) => void,
  removeItem: (ind: number) => void,
  addItem: () => void,
  nameInputOne: string,
  labelInputOne: string,
  nameInputTwo: string,
  labelInputTwo: string,
  nameInputThree: string,
  labelInputThree: string

}

export default function InputDynamicArray(props: InputDynamicArrayProps)
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
              name="value"
              label={props.labelInputOne}
              value={x.value}
              onChange={e => props.handleChange(e, i)}
              />
              </Grid>
              <Grid item xs={3}>
              <TextField 
              name='text'
              label={props.labelInputTwo}
              value={x.text}
              onChange={e => props.handleChange(e, i)}
              />
              </Grid>
              <Grid item xs={3}>
              <TextField 
              name='price'
              label={props.labelInputThree}
              value={x.price}
              onChange={e => props.handlePriceChange(e, i)}
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
