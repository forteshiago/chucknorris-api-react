import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Header from "../Header";
import Card from "../Card"
import Button from "../Button";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#fafafa',
    },
    h1: {
        marginBottom: '1rem',
    }
}));

function Main() {
    const classes = useStyles();

    return (
        <main className={classes.root} >
            <Header className={classes.h1} >Chuck Norris Facts</Header>
            <Card />
            <Button />
        </main>
    );
}

export default Main;