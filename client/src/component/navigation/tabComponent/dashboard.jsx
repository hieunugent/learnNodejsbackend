import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Button, Menu, MenuItem, makeStyles, TextField } from "@material-ui/core";
import './mycomponent.css'
import MainMenu from "./mainmenu";
import Issues from "./issues";

const useStyles = makeStyles((theme) => ({
  root: {
      '& > *':{
        margin: theme.spacing(1),
      },
  },
  rootform:{
     margin:theme.spacing(1),
     width:'25ch',
  }
}))
export default function Dashboard() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick =(event)=> {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const drawer = (
      <div >
      <div className={classes.root}>

        <Button
          color="primary"
          variant="outlined"
          aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
        > Open Menu</Button>
        
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        keepMounted
        onClose={handleClose}
        >
        <MenuItem onClick={handleClose} >  List Done   </MenuItem>
        <MenuItem onClick={handleClose} >  List On Process   </MenuItem>   
        <MenuItem onClick={handleClose} >  List On Waiting    </MenuItem>
        <MenuItem onClick={handleClose} >  List On Assigning   </MenuItem>
      </Menu>
      
     
      <main>
        <div> <MainMenu/> </div>
      </main>
      </div>

  );
  return (
     <div  role='presentation'>
        <CssBaseline />
          {drawer}  
    </div>
  );
}