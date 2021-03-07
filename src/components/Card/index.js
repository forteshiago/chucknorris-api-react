import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    myPaper: {
        width: '608px',
        border: 'none',
        backgroundColor: 'transparent',
    },
    myText: {
        
        backgroundColor: '#FFF',
        borderRadius: '10px',
        boxShadow: '#bdbdbd 0px 4px 6px',
        
        margin: '24px 0',
        padding: '48px 24px',

        textAlign: 'center',
        fontFamily: 'Mulish',
        fontSize: '14px',
        fontWeight: '400',
        color: '#20232D',
        border: '1px solid #989898',
    }
}));

function Card( {info} ) {
    const classes = useStyles();

    return (
        <>
        {info.result && (
            <Paper className={classes.myPaper} variant="outlined" >
                {info.result.map((newfact) => (
                    <Typography key={newfact.id} className={classes.myText}
                    dangerouslySetInnerHTML={{__html: newfact.value}}
                    />
                ))}
            </Paper>
        )}
        </>
    );
};

export default Card;