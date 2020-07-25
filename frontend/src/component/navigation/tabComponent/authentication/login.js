import React from 'react';
import { TextField, Button, makeStyles, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import clsx from "clsx";

const useStyles = makeStyles((theme)=> ({
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
    },
    inputformatField: {
        width: ' 80%',
    },
    fixedHeight: {
        marginTop: theme.spacing(2),
        marginLeft: '35%',
        marginRight: '60%',
        height: "20%",
        width: '30%',
    },
}));


 const Login = ()=> {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.fixedHeight);
    return (      
        <div >
            <Paper className={fixedHeightPaper}>
                <h1> Login </h1>
                <TextField
                className={classes.inputformatField}
                    id="standard-basic"
                    label="Email Address * "
                    type="email"
                />
                <br/>
                <TextField
                className={classes.inputformatField}
                    id="standard-basic"
                    label="Password *"
                    type="password"
                />
                <br/>    
                 <h3> No account? <Link to="/registrations">Register </Link></h3>
                <Button className={classes.margin} variant="outlined" color="primary" > Login </Button>
            </Paper> 
        </div> 
    );
}

export default Login;