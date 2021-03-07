import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import useDebounce from "../../controller/useDebounce";

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
    myInput: {
      width: '296px',
    },
}));

const TextInput = ({ value, onChange }) => {
    const classes = useStyles();
    const [displayValue, setDisplayValue ] = useState(value);
    const debouncedChange = useDebounce(onChange, 1000);

    function handleChange(e) {
        setDisplayValue(e.target.value)
        debouncedChange(e.target.value);
    }

    return(
        <TextField
            className={classes.myInput} id="myInputText" label="Search" color="secondary"
            type='search' value={displayValue} onChange={handleChange}
        />
    )
};

export default TextInput;