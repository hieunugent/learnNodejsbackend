
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

} from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

import { Button } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#73e8ff',
            main: '#29b6f6',
            dark: '#0086c3',
            contrastText: '#fff',
        },

    },
    // overrides: {
    //     // Name of the component ⚛️ / style sheet
    //     MuiButton: {
    //         // Name of the rule
    //         text: {
    //             // Some CSS
    //             background: '#29b6f6',
    //             borderRadius: 3,
    //             border: 0,
    //             color: 'white',
    //             height: 48,
    //             padding: '0 30px',
    //             boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    //         },
    //     },
    // },
    typography: { useNextVariants: true },
});
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },

}))(MenuItem);


 const LoginMenuItems = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <MuiThemeProvider theme={theme}>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
             >
                Account
             </Button>
            </MuiThemeProvider>
             <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link to="/logins" style={{ textDecoration: 'none' }} >
                    <StyledMenuItem >
                        <ListItemText primary="Login"> </ListItemText>
                    </StyledMenuItem>  </Link>

                <Link to="/registrations" style={{ textDecoration: 'none' }} >
                    <StyledMenuItem>
                        <ListItemText primary="Register" />
                    </StyledMenuItem>
                </Link>
              </StyledMenu>

         </div>
    );
}
export default LoginMenuItems;