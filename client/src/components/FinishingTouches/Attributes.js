import React, {  useState } from 'react'
import {  useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Grid, Header } from 'semantic-ui-react'
import Attribute from './Attribute'

export default function Attributes() {
    const [attributeArray] = useState(['Strength', 'Dexterity', 'Constitution', 'Wisdom', 'Intelligence', 'Charisma'])
    const points = useSelector(state=> state.pointCalculator)
    const name = useSelector(state=> state.name)
    const race = useSelector(state=> state.race)
    const classSelection = useSelector(state=> state.classSelection)
    const str = useSelector(state=> state.pointCalculator['Strength'][state.pointCalculator['Strength'].length - 1])
    const dex = useSelector(state=> state.pointCalculator['Dexterity'][state.pointCalculator['Dexterity'].length - 1])
    const con = useSelector(state=> state.pointCalculator['Constitution'][state.pointCalculator['Constitution'].length - 1])
    const wis = useSelector(state=> state.pointCalculator['Wisdom'][state.pointCalculator['Wisdom'].length - 1])
    const int = useSelector(state=> state.pointCalculator['Intelligence'][state.pointCalculator['Intelligence'].length - 1])
    const cha = useSelector(state=> state.pointCalculator['Charisma'][state.pointCalculator['Charisma'].length - 1])
    const history = useHistory()
    let usedPoints = 0
    
    //All this does is allow us to access the names of the pointCalculator as an array, so we can easily loop over it.
    //That makes it easy to check how many points the user has used.
    Object.keys(points).forEach(name => {usedPoints += points[name][0]})

    
    
    
    function submitHandler(){
      if (name === '') {
        alert('You must choose a name!')
      } else if (usedPoints !== 27){
        alert('You must spend all points!')
      } else {
        if(window.confirm("Are you sure you wish to confirm this Character?")){
          fetch('/api/v1/characters', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                race: race,
                class: classSelection,
                str: str,
                dex: dex,
                con: con,
                wis: wis,
                int: int,
                cha: cha                
            }),
            headers: {
                'Content-Type' : 'application/JSON'
            }
        })
        .then(res =>res.json())
        .then(() =>{
          history.push('/characters')
        })
          }
        } 
      }

    return (
        <>
        <Header>
            Your Character's Attrubutes:
        </Header>
        <div>
          You have {27 - usedPoints} points left.
        </div>
        <Grid columns={3} style={{marginTop:"10px"}}>
          <Grid.Row>
            {attributeArray.map((attribute, index) => {
                return <Grid columns={2} doubling key={index}><Attribute attribute={attribute} /></Grid>
            })}
          </Grid.Row>
        </Grid>
        <Button onClick={() => submitHandler()}>
          Submit
        </Button>
        </>
    )
}
