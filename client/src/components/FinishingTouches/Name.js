import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { setName } from '../../redux/actions'

export default function Name() {
  const name = useSelector(state=> state.name)
  const dispatch = useDispatch()
  const [nameChange, setNameChange] = useState('')

  function handleNameSelect(nameChange) {
    dispatch(setName(nameChange))
  }
  return (
    <Form inverted>
              <Form.Field width="6">
                { name === '' &&
                <h3>What will this character's name be?</h3>}
                { name !== '' &&
                <h3>This character's name is {name}.</h3>}
                <input placeholder='Name' onChange={(e) => {setNameChange(e.target.value)}} style={{width:'250px'}}/>
              </Form.Field>
              <Button onClick={() => handleNameSelect(nameChange)}>Glory to their Name!</Button>
            </Form>
  )
}
