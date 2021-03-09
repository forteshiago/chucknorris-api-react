import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    myPaper: {
        width: '608px',
        margin: '85px 0',
        backgroundColor: '#FFF',
        borderRadius: '10px',
        boxShadow: '#bdbdbd 0px 4px 6px',
        [theme.breakpoints.down('xs')]: {
            width: '328px',
            margin: '40px 0'
        },
    },
    myText: {
        padding: '48px 24px',
        textAlign: 'center',
        
        fontFamily: 'Mulish' ,
        fontSize: '14px',
        fontWeight: '400',
        color: '#20232D',
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
    }
}));

// Styles -------------------------------------

function RandomCard( {randomFact, numresults} ) {
    const classes = useStyles();

    const confirm = numresults === false ? 'none':"" 

    return (
        <Paper className={classes.myPaper} variant="outlined" style={{ display: confirm }} >
            <Typography className={classes.myText} dangerouslySetInnerHTML={{__html: randomFact}}/>
        </Paper>
    );
};

export default RandomCard;