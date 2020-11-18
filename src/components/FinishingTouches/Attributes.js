import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, Header } from 'semantic-ui-react'
import {  setStatSubmitted } from '../../redux/actions'
import Attribute from './Attribute'

export default function Attributes() {
    const [attributeArray] = useState(['Strength', 'Dexterity', 'Constitution', 'Wisdom', 'Intelligence', 'Charisma'])
    const points = useSelector(state=> state.pointCalculator)
    const name = useSelector(state=> state.name)
    const dispatch = useDispatch()
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
                dispatch(setStatSubmitted(true))
            }
        }
}

    return (
        <>
        <Header>
            Your Character's Attrubutes:
        </Header>
        <div>You have {27 - usedPoints} points left.</div>
        <Grid columns={3} style={{marginTop:"10px"}}>
            <Grid.Row>
            {attributeArray.map((attribute, index) => {
                return <Attribute key={index} attribute={attribute} />
            })}
            </Grid.Row>
        </Grid>
        <Button onClick={() => submitHandler()}>Submit</Button>
        </>
    )
}
