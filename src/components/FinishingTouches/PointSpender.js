//This is in many ways what I was dreading the most, but it actually turned out to be a bit easier than I expected!

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'semantic-ui-react'
import {  setStatCalc, setStatSubmitted } from '../../redux/actions'

export default function PointSpender(props) {
    const dispatch = useDispatch()
    const points = useSelector(state=> state.pointCalculator)
    const statSubmitted = useSelector(state => state.statSubmitted)
    let usedPoints = 0
    //See 'Attributes.js' for a brief explanation on what this does.
    Object.keys(points).forEach(name => {usedPoints += points[name][0]})
    useEffect(()=>{
        if(statSubmitted){
            dispatch(setStatCalc(props.name, [0,8]))
            dispatch(setStatSubmitted(false))            
        }
    }, [props, dispatch, points, statSubmitted])
    
    function handleChange(e){
        //This silly line converts the values from our 'options' to integers as opposed to strings.
        dispatch(setStatCalc(props.name, e.target.value.split(',').map(x => parseInt(x, 10))))
    }
    
    return (
        <Form inverted>
            
            <Form.Field label={props.name + " Score:"} control='select' onChange={handleChange}>
            <option value='0,8' defaultValue>8 (0 points)</option>
            {/* This may not be the most elegant solution, but I'm proud of it.
                What we do is create a turnery for each option. If you user doesn't have enough points, they can't select that option.
                That way the user can never spend too much. Originally, I would only render the options that
                the user had enough points for, but that created problems. */}
            { usedPoints < 27 ?
            <option value='1,9'>9 (1 point)</option> : <option disabled='disabled' value='1,9'>9 (1 point)</option>}
            { usedPoints < 26 ?
            <option value='2,10'>10 (2 points)</option> : <option disabled='disabled' value='2,10'>10 (2 points)</option>}
            { usedPoints < 25 ?
            <option value='3,11'>11 (3 points)</option> : <option disabled='disabled' value='3,11'>11 (3 points)</option>}
            { usedPoints < 24 ?
            <option value='4,12'>12 (4 points)</option> : <option disabled='disabled' value='4,12'>12 (4 points)</option>}
            { usedPoints < 23 ?
            <option value='5,13'>13 (5 points)</option> : <option disabled='disabled' value='5,13'>13 (5 points)</option>}
            { usedPoints < 21 ?
            <option value='7,14'>14 (7 points)</option> : <option disabled='disabled' value='7,14'>14 (7 points)</option>}
            { usedPoints < 19 ?
            <option value='9,15'>15 (9 points)</option> : <option disabled='disabled' value='9,15'>15 (9 points)</option>}
            
            </Form.Field>
        </Form>
    )
}
