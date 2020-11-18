import React, { useEffect, useState } from 'react'
import { Header } from 'semantic-ui-react'
import RaceCard from './RaceCard'

export default function Races() {
    const [races, setRaces] = useState([])
    // dispatch = useDispatch()
    
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/races`)
          .then(res => res.json())
          .then(data => {
            setRaces(data.results);
          })
      }, [])
    
    return (
        <div>
        <Header as="h1" style={{marginTop:"5px"}}>
            First, choose your race.
        </Header>
            {races.map((race, index) => {
                return <RaceCard race={race.index} key={index} />
            })}
        </div>
    )
}
