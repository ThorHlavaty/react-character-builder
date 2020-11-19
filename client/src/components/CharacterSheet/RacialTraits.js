import React, { useEffect, useState } from 'react'
import { Container, Header } from 'semantic-ui-react'

export default function RacialTraits(props) {
  const [traits, setTraits] = useState([])
  const [proficiencies, setProficencies] = useState([])


  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/races/${props.race}`)
      .then(res => res.json())
      .then(data => {
        if(data.starting_proficiencies.length !== 0){
        setProficencies(data.starting_proficiencies)
        }
        
        if (data.traits !== undefined){
          setTraits(data.traits)
          }
      }
    )
  }, [props.race])
  
  return (
    <>
    <Header>
      Racial Traits
    </Header>
    {traits.length > 0 ? <Container>
      Traits: {traits.map((trait, index) => {
          return <span key={index}>{trait.name + " ♦ "}</span>
        })}
    </Container> : 
    <Container>
      Traits: This character has no bonus racial traits.
    </Container>
    }
    {proficiencies.length > 0 ?<Container>
      Proficencies: {proficiencies.map((proficiency, index) => {
          return <span key='index'>{proficiency.name + " ♦ " }</span>
        })}
    </Container>:
    <Container>
    Proficencies: This character has no bonus racial proficiencies.
    </Container>}
    </>
  )
}
