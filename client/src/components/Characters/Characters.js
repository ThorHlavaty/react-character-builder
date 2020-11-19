import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Grid, Header } from 'semantic-ui-react';
import Character from './Character';

export default function Characters() {
  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    fetch('/api/v1/characters')
      .then(res => res.json())
      .then(data => {
        setCharacters(data);
      })
  }, [])

  
  
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
