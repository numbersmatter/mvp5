import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import DrawerMenu from './DrawerMenu';

export interface NavbarProps {
  user?: any,
  drawerState: boolean,
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>
};

export default function NavBar(props: NavbarProps) {

  const toggleDrawer =
  ( open: boolean, setDrawerState: (state:boolean)=>void ) =>{
   /*  (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      } */

    setDrawerState(open);
  };
  
  

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    props.setDrawer(true)
  };

  const handleClose = () => {
    toggleDrawer(false, props.setDrawer)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon 
              
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Furry Marketplace
          </Typography>
          {props.user && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              
            </div>
          )}
        </Toolbar>
      </AppBar>
      <DrawerMenu drawerState={props.drawerState} setDrawer={props.setDrawer} />
    </Box>
  );
}