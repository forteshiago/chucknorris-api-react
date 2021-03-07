import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Button from "../Button";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    myPaper: {
        width: '608px',
        margin: '85px 0',
        backgroundColor: '#FFF',
        borderRadius: '10px',
        boxShadow: '#bdbdbd 0px 4px 6px',
    },
    myText: {
        padding: '48px 24px',
        textAlign: 'center',
        
        fontFamily: 'Mulish' ,
        fontSize: '14px',
        fontWeight: '400',
        color: '#20232D',
    }
}));

// Styles -------------------------------------

const API_URL = 'https://api.chucknorris.io/jokes/';

function RandomCard() {
    const classes = useStyles();

    const [randomFact, setrandomFact] = useState('');
    
    const sendRandomFact = () => {
        fetch(`${API_URL}random`)
        .then(res => res.json())
        .then(data => setrandomFact(data.value))
    }

    useEffect(() => {
        sendRandomFact();
    }, []);
    
    return (
        <>
        <Paper className={classes.myPaper} variant="outlined" >
            <Typography className={classes.myText} dangerouslySetInnerHTML={{__html: randomFact}}/>
        </Paper>
        <Button type='button' myRandom={() => sendRandomFact()} />
        </>
    );
};

export default RandomCard;