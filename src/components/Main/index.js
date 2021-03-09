import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Header from "../Header";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import RandomCard from "../RandomCard";
import Card from "../Card";
import Button from "../Button";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fafafa',

        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    h1: {
        margin: '1rem 0',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '328px',
        },
    },

    h3: {
        margin: '32.7px 0',
        color: '#20232D',
        fontFamily: 'Mulish, sans-serif',
        fontSize: '12px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
        },
        
    },
    areasearch: {
        width: '608px',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop:'1.5rem',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '328px',
            height: '120px',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
}));

// Styles -------------------------------------

const API_URL_BASE = 'https://api.chucknorris.io/jokes/';

function Main() {
    const classes = useStyles();
    const [info, setInfo] = useState({});
    const [text, setText] = useState("");
    const [randomFact, setrandomFact] = useState("");
    

    useEffect(() => {
      setInfo({});
      
      if (text) {
          fetch(`${API_URL_BASE}search?query=${text}`)
          .then((response) => response.json())
          .then((response) => {
              setInfo(response);
          });
        } else {
            sendRandomFact();
        }
    }, [text]);

    let sendRandomFact = () => {
        setInfo({});

        fetch(`${API_URL_BASE}random`)
        .then(res => res.json())
        .then(data => setrandomFact(data.value))
    }

    const numresults = !info.total && info.total;

    return (
        <main className={classes.root}>
            
                <Header className={classes.h1} >Chuck Norris Facts</Header>
                <div className={classes.areasearch}>
                    <div>
                    <TextInput value={text} onChange={(mysearch) => setText(mysearch)} />
                    
                    </div><SelectInput />
                </div>
                    { numresults === false && 
                        <h3 className={classes.h3} > Showing {info.total} results </h3>
                    }
                <RandomCard id="myRandomFact" randomFact={randomFact} numresults={numresults} />

                <Button type='button' myRandom={() => sendRandomFact()}/>
                <Card info={info} />           
         
        </main>
    );
}

export default Main;