import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, Header, Segment } from 'semantic-ui-react';
import { setClass } from '../../redux/actions';
import CharacterStats from './CharacterStats';

export default function CharacterSheet() {
  const [character, setCharacter ] = useState({});
  const [statArray, setStatArray] = useState([])
  const  [loaded, setLoaded] = useState(false)
  const { id } = useParams();
  const dispatch = useDispatch()
  

  useEffect(() => {
      fetch(`/api/v1/characters/${id}`)
      .then(res => res.json())
      .then(data => {
          setLoaded(false)
          setCharacter(data);
          setStatArray([data.str, data.dex, data.con, data.wis, data.int, data.cha])
          dispatch(setClass(data.class))
          setLoaded(true)
      })    
  }, [id, dispatch])
  
  return (
    <>
    { loaded && <Segment style={{margin:'20px'}}>
      <Header as='h1'>
      {character.name}, the {character.race.charAt(0).toUpperCase()}{character.race.slice(1)} {character.class.charAt(0).toUpperCase()}{character.class.slice(1)}
      </Header>
      <Grid celled stackable>
        <CharacterStats stats={statArray} />
      </Grid>
    </Segment>}</>
  )
}
