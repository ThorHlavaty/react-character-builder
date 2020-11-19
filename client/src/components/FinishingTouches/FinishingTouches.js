import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Header, Segment } from 'semantic-ui-react'
import {  setStatCalc } from '../../redux/actions'
import Attributes from './Attributes'
import Name from './Name'

export default function FinishingTouches() {
    const race = useSelector((state)=> state.race)
    const classSelection = useSelector((state)=> state.classSelection)
    const dispatch = useDispatch()

    
    //This makes sure we have a clean stats array.
    useEffect(()=>{
          dispatch(setStatCalc('Strength', [0,8]))
          dispatch(setStatCalc('Dexterity', [0,8]))
          dispatch(setStatCalc('Constitution', [0,8]))
          dispatch(setStatCalc('Wisdom', [0,8]))
          dispatch(setStatCalc('Intelligence', [0,8]))
          dispatch(setStatCalc('Charisma', [0,8]))
  }, [ dispatch ])

    return (
      <div>
        <Header as="h1" style={{marginTop:"5px"}}>
            I see, a{race === 'elf' && 'n'} {race} {classSelection}! <br /> Now for the finishing touches...
        </Header>
        <Segment textAlign='left' inverted>
            <Name/>
            <Attributes />
        </Segment>
      </div>
    )
}
