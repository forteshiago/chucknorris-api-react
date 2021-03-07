import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Header from "../Header";
import TextInput from "../TextInput";
import RandomCard from "../RandomCard";
import Card from "../Card";
import Button from "../Button";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#fafafa',

        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    h1: {
        marginBottom: '1rem',
    },
    h3: {
        margin: '32.7px 0',
        color: '#20232D',
        fontFamily: 'Mulish, sans-serif',
        fontSize: '12px',
    },
    searchresult: {
    }
}));

// Styles -------------------------------------

const API_URL_BASE = 'https://api.chucknorris.io/jokes/';

function Main() {
    const classes = useStyles();

    const [info, setInfo] = useState({});
    const [text, setText] = useState("");
    const [randomFact, setrandomFact] = useState('');

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
                <TextInput value={text} onChange={(mysearch) => setText(mysearch)} />
                    { numresults === false && 
                        <h3 className={classes.h3} > Showing {info.total} results </h3>
                    }
                <RandomCard id="myRandomFact" randomFact={randomFact} numresults={numresults}/>

                <Button type='button' myRandom={() => sendRandomFact()}/>
                <Card className={classes.searchresult} info={info} />
           
         
         
        </main>
    );
}

export default Main;