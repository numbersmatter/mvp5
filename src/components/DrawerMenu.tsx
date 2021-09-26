import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

export interface DrawerProps {
  drawerState: boolean,
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>
};


export default function DrawerMenu(props: DrawerProps) {
  const toggleDrawer =
  ( open: boolean, setDrawerState: (state:boolean)=>void ) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

    setDrawerState(open);
  };

  const ListStuff =() =>{
    return(
      <List>
        <ListItem button key='profile'>
          <ListItemIcon>
            <PersonOutlineIcon/>
          </ListItemIcon>
          <ListItemText primary='profile' />
        </ListItem>
        <ListItem button key='requests'>
          <ListItemIcon>
            <RequestQuoteIcon/>
          </ListItemIcon>
          <ListItemText primary='requests' />
        </ListItem>
      </List>
    )
  }

  return (

    <React.Fragment>
      <Drawer
        anchor='left'
        open={props.drawerState}
        onClose={toggleDrawer(false, props.setDrawer)}
        sx={{
          width:'250px'
        }}
      >
        <ListStuff />
        
      </Drawer>
    </React.Fragment>

  );


}

