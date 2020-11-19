import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Header } from 'semantic-ui-react';
import Character from './Character';

export default function Characters() {
  const [characters, setCharacters] = useState([])
  const charSubmitted = useSelector(state => state.charSubmitted)
  
  useEffect(() => {
    fetch('/api/v1/characters')
      .then(res => res.json())
      .then(data => {
        if(charSubmitted){
        setCharacters(data)
      }
      })
  }, [charSubmitted])

  
  
  return (
    <div>
      {characters.length === 0 && <Header style={{marginTop:'25vh'}} as='h2'>You've not created a character yet. Shall we <Link to='/races'>Thorge</Link> one?</Header>}
      {characters.length !== 0 && <Header style={{marginTop:'5vh', textDecoration: 'underline'}} as='h1'>Your Characters:</Header>}
      <Grid columns={2} stackable style={{margin:"10px"}}>
      {characters.map(character => {
        return <Character character={character} key={character.id} />
        }
      )}
      </Grid>
    </div>
  )
}
