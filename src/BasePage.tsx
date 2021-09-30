import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import WaitList from './components/WaitList'
import Login from './components/Login'
import ArtistProfile from './components/ArtistProfile'
import NotFound from './components/NotFound';
//import WaitList from '../pages/WaitList';
//import ArtistProfile2 from '../pages/ArtistProfile2';
//import Login from '../pages/Login';


interface BasePageProps{
  user?: {}
}

export default function BasePage(props: BasePageProps){


  return (
    <Container
    sx={{
      width: '100%',
      height: '100vh',
      margin: 0,
     // backgroundImage: "url(/images/FMBg.jpg)",
      /* bgcolor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      }, */
    }}
    >
      <Box>
        <Switch>
          <Landing path='/te'/>
          <Landing path='/test2'/>
          
          <Profile path='/test3'/>
          <Logging path='/login' />
          <TestPage path='/artist/:id' />
          <Route path='/' exact component={WaitList}/>
          <Route component={NotFound}/>
          
          {/* <ProfileModify />
          <Forms />
          <FormModify />
          <Projects />
          <ProjectsModify />
          <Review /> */}

        </Switch>

      </Box>
    </Container>
  )
}


export interface PageProps {
  path?: string,
  [key: string]: any,
}

function TestPage (props: PageProps){
  return (
    <Route path={props.path} >
      <ArtistProfile/>
    </Route>
    )
}

function NoResource (props: PageProps){

  return (
    <Route component={NotFound}/>
  )
}

function Landing(props: PageProps){
  return (
    <Route path={props.path} exact component={WaitList} />
  )
}

function Logging(props: PageProps){
  return(
    <Route path={props.path} exact >
      <h2>Login page</h2>
      <Login />
    </Route>
  )
}

function Profile(props: PageProps){
  return(
    <Route path={props.path}  component={ArtistProfile}/>
  )
}

/* function ProfileModify (props: PageProps){
  return(

  )
}
 */