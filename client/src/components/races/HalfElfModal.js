//This was fun. The problem with half-elves is that they get to choose to put
//their bonus attributes. This meant I had to come up with special logic for them.

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { setHalfElfBonusStats } from '../../redux/actions'

export default function HalfElfModal() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [numberSelected, setNumberSelected] = useState(0)
    const [str, setStr] = useState(false)
    const [dex, setDex] = useState(false)
    const [con, setCon] = useState(false)
    const [wis, setWis] = useState(false)
    const [int, setInt] = useState(false)
    
    useEffect(()=>{
        dispatch(setHalfElfBonusStats())
    }, [dispatch])

    function handleClick() {
        if(numberSelected !== 2){
            alert("You must select exactly 2 stats!")
            return
        }
        if (str){
            dispatch(setHalfElfBonusStats('str'))
        }
        if (dex){
            dispatch(setHalfElfBonusStats('dex'))
        }
        if (con){
            dispatch(setHalfElfBonusStats('con'))
        }
        if (wis){
            dispatch(setHalfElfBonusStats('wis'))
        }
        if (int){
            dispatch(setHalfElfBonusStats('int'))
        }
        history.push('/classes')
    }

    return (<Form>
        <Form.Group grouped>
      <label>Choose 2 bonus attributes:</label>
      <Form.Field label='Strength'  control='input' type='checkbox' onClick={(e)=>  {setStr(e.target.checked); setNumberSelected(e.target.checked ? numberSelected + 1 : numberSelected - 1)}}/>
      <Form.Field label='Dexterity' control='input' type='checkbox' onClick={(e)=>  {setDex(e.target.checked); setNumberSelected(e.target.checked ? numberSelected + 1 : numberSelected - 1)}}/>
      <Form.Field label='Constitution' control='input' type='checkbox' onClick={(e)=>  {setCon(e.target.checked); setNumberSelected(e.target.checked ? numberSelected + 1 : numberSelected - 1)}}/>
      <Form.Field label='Wisdom' control='input' type='checkbox' onClick={(e)=>  {setWis(e.target.checked); setNumberSelected(e.target.checked ? numberSelected + 1 : numberSelected - 1)}}/>
      <Form.Field label='Intelligence' control='input' type='checkbox' onClick={(e)=>  {setInt(e.target.checked); setNumberSelected(e.target.checked ? numberSelected + 1 : numberSelected - 1)}}/>
      <Button type='submit' color='red' onClick={()=> handleClick()}>Submit</Button>
        </Form.Group>
        </Form>
    )
}
