import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { setName } from '../../redux/actions'
import Attributes from './Attributes'

export default function FinishingTouches() {
    const [nameChange, setNameChange] = useState('')
    const race = useSelector((state)=> state.race)
    const classSelection = useSelector((state)=> state.classSelection)
    const name = useSelector((state) => state.name)
    const dispatch = useDispatch()

    function handleNameSelect(nameChange) {
        dispatch(setName(nameChange))
    }

    return (
        <div>
            <Header as="h1" style={{marginTop:"5px"}}>
                I see, a{race === 'elf' && 'n'} {race} {classSelection}! <br /> Now for the finishing touches...
            </Header>
            <Segment textAlign='left' inverted>
            <Form inverted>
            <Form.Field width="6">
                { name === '' &&
                <h3>What will this character's name be?</h3>}
                { name !== '' &&
                <h3>This character's name is {name}.</h3>}
                <input placeholder='Name' onChange={(e) => {setNameChange(e.target.value)}}/>
            </Form.Field>
            <Button onClick={() => handleNameSelect(nameChange)}>Glory to their Name!</Button>
            </Form>
            <Attributes />
            </Segment>
        </div>
    )
}
