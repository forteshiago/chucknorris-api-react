import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  btnAdv: {
    width: '245px',
    textTransform: 'none',
    textAlign: 'center',

    backgroundColor: '#28e18e',
      '&:hover': {
      backgroundColor: '#53e7a4',
      boxShadow: '#1c9d63 0px 2px 4px',
      },
    
    color: '#20232D',
    boxShadow: '#1c9d63 0px 2px 4px',

    borderRadius: '3px',
    borderStyle: 'none',
    fontSize: '16px',
    fontWeight: '700',
  }
}));

export default function MyButton() {
  const classes = useStyles();
  return (
    <Button variant="contained"disableElevation className={classes.btnAdv}>
        Get a new random fact!
    </Button>
  );
}