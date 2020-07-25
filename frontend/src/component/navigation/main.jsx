import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";

import Dashboard from "./tabComponent/dashboard";
import Project from "./tabComponent/projectComponent/addProject";
import {Box, Toolbar, IconButton, Drawer, Typography, ListItem, makeStyles } from "@material-ui/core";
import Copyright from './tabComponent/copyright';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import AddIssueButton from './tabComponent/issuesComponent/addIssueButton';
import Login from './tabComponent/authentication/login';
import Register from './tabComponent/authentication/registration';
import LoginMenuItems from './tabComponent/authentication/loginButton';


const drawerWidth= 240;
const useStyles = makeStyles((theme)=> ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  content: {
  
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
   
    marginTop: `60px`,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  loginCss:{
      marginLeft: '30%',
      marginRight:  '5%',
      width:'5%', 
      flexShrink: 0,
    },
  headlinecss:{
      marginRight: 'auto',
      flexShrink:0,
  },
}));
export default function Main() {
  const classes = useStyles();
  const [open , setOpen] = React.useState(false);
  const handleDrawerOpen =()=> {
    setOpen(true);
  }
  const handleDrawerClose = ()=> {
    setOpen(false);
  }
  return (
    <div >
      <Router>
    <AppBar position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]:open,
        })} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap className={classes.headlinecss}>
           Bugs Stracking App
         </Typography>
         <div className={classes.loginCss}> 
             <LoginMenuItems />
         </div>
        </Toolbar>
    </AppBar>
     
     <nav>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
            >
          <div >
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List  >
              <ListItem>   <Link to="/dashboard" style={{ textDecoration: 'none' }} >
              Dashboard
              </Link></ListItem>
              <ListItem>   <Link to="/projects" style={{ textDecoration: 'none' }}>          
              Projects
              </Link></ListItem>
              <ListItem>   <Link to="/issues" style={{ textDecoration: 'none' }}>
              Issues            
              </Link> </ListItem>
              <ListItem>   <Link to="/doc" style={{ textDecoration: 'none' }}>
              Documents
              </Link></ListItem> 
          </List>
        </Drawer>
     </nav>
        <main className={clsx(classes.content,{
          [classes.appBarShift]: open,}
          )}>  
          <hr />
          <div  >

          <Switch>
              <Route exact path="/dashboard"><Dashboard /></Route>
              <Route exact path="/projects"   component={Project}></Route>
              <Route exact path="/issues"     component={AddIssueButton}></Route>
              <Route exact path="/logins"                       > <Login/></Route>
              <Route exact path="/registrations"><Register /></Route>
              <Route exact path="/doc"> Documents </Route>
          </Switch>
          <Box pt={4}>
            <Copyright />
          </Box>
          </div>

         </main> 

      </Router>
    </div>
  
  );
}




