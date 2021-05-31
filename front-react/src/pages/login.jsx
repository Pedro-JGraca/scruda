import { makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.default,
      },
}));

const Login = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>

        </div>
    );
};
 
export default Login;