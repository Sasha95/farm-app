import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import boy from "../../resources/boy.svg"
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../store/auth/AuthSelector';
import { login } from '../../store/auth/AuthActions';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        height: 45
    },
    authText: {
        marginTop: 20,
        fontWeight: "bold"
    },
    img: {
        width: 150,
        height: 150,
    }
}));

export const SignIn = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selector = useSelector(authSelector);
    const handleClick = () => {
    }

    useEffect(() => {
        dispatch(login({ login: "1", password: "1" }))
    }, [])


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <img className={classes.img} src={boy} alt="boy" />
                <Typography className={classes.authText} component="h1" variant="h4">
                    Авторизация
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="text"
                        type="text"
                        label="Логин"
                        name="text"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleClick}
                    >
                        Войти
                    </Button>
                </form>
            </div>
        </Container>
    )
}

