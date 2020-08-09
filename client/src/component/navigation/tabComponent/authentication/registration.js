import React, { useState } from 'react';
import { TextField, Button, makeStyles, FormGroup, FormControlLabel, Checkbox, Paper } from '@material-ui/core';
import "./authenticate.css"
import clsx from "clsx";
import UserDataService from "../../../../services/UserService"
import { response } from 'express';
const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
    },
    inputformatField: {
        width: ' 80%',
    },

    fixedHeight: {
        marginTop: theme.spacing(2),
        marginLeft:'35%',
        marginRight:'60%',
        height: "20%",
        width:'30%',
    },
    styleCheckbox: {
    marginLeft: '20%',
    marginRight: '40%',
}
}));


const Registration = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx( classes.fixedHeight);
    const checkboxPaper = clsx(classes.styleCheckbox, classes.inputformatField);
    const [userInfo, setuserInfo]= useState();
    const [state, setState] = useState({
        male: false,
        female: false,
        other:false,

    });
    const handleChange = (event)=> {
        setState({
            ...state, [event.target.name]: event.target.checked
        });
    };
    const handleChangeUser=(event)=> {
        setuserInfo({
            ...state,[event.target.name]: event.target.value
        })
    }
    const handleRegister = (event)=> {
        var data = {
            username: userInfo.username,
            password: userInfo.password,
        }
        UserDataService.create(data)
        .then(response =>{
            console.log(response);
        }).catch(e => {
            console.log(e);
        })
        event.preventDefault()

    }
    return (
    
        <div >
            <Paper className={fixedHeightPaper}>
                <h1> Registration </h1>
                <TextField
                    className={classes.inputformatField}
                    id="standard-basic"
                    label="Last Name"
                    type="text"
                    name="lastName"
                    onChange={handleChangeUser}
                />
                <br />
                <TextField
                    className={classes.inputformatField}
                    id="standard-basic"
                    label="First Name"
                    type="text"
                    name="firstName"
                    
                    onChange={handleChangeUser}
                />
                <br />
                <TextField
                    className={classes.inputformatField}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    name="email"
                    onChange={handleChangeUser}
                />
                <br />
                <TextField
                    className={classes.inputformatField}
                    id="standard-basic"
                    label="Password"
                    type="password"
                    name="password"
                    onChange={handleChangeUser}
                />
                <br />
                <div className={checkboxPaper}>
                    <FormGroup row >
                        <FormControlLabel
                            control={<Checkbox checked={state.male} onChange={handleChange} name="male" />}
                            label="male"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.female} onChange={handleChange} name="female" />}
                            label="female"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.other} onChange={handleChange} name="other" />}
                            label="other"
                        />
                    </FormGroup>
                </div>



                <Button className={classes.margin} variant="outlined" color="primary" onClick={handleRegister} > Register </Button>
        </Paper>
           
        </div>

    );
}

export default Registration;