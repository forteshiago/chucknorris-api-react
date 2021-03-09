import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(() => ({
    formControl: {
        width: '296px',
      },
      myMenuItems: {
        width: '100%',
        height: '40px',
      },
}));

function SelectInput() {
    const classes = useStyles();
    const [value, setValue] = useState('Any');
    const [category, setCategory] = useState([]);

    useEffect(() => {
        
        fetch(`https://api.chucknorris.io/jokes/categories`)
        .then(res => res.json())
        .then(data => setCategory(data))
    }, []);

    console.log(value);
    
    const handleChange = e => setValue(e.target.value);

    return(
        <>
        <FormControl className={classes.formControl} >
            <InputLabel shrink color='secondary'>Category</InputLabel>
            <Select onChange={handleChange} color="secondary" >
               
                {category.map((option) => (
                    <MenuItem key={option} value={option} className={classes.myMenuItems} >
                        {option}
                    </MenuItem>
                ))}
           
            </Select>            
        </FormControl>
        </>
    )
}

export default SelectInput;