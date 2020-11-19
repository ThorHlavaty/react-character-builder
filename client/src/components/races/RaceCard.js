import React, { useEffect, useState } from 'react'
import { Button, Grid, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import {  useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { resetHalfElfBonusStats, setClass, setName, setRace } from '../../redux/actions'
import HalfElfModal from './HalfElfModal'



export default function RaceCard(props) {
    const [raceData, setRaceData] = useState([])
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/races/${props.race}`)
        .then(res => res.json())
        .then(data => {
            dispatch(setRace(''))
            dispatch(setClass(''))
            dispatch(setName(''))
            dispatch(resetHalfElfBonusStats())
            setRaceData(data);
        })
    }, [props, dispatch])
    
    function handleSelection(race){
        (race === 'half-elf' ? setOpen(true) : history.push('/classes'))
        dispatch(setRace(race))
        
    } 

    return (
            <>
            <Grid celled>

        
            <Grid.Row> 
                <Grid.Column width={4}>
            <Image src={`../racesImages/${raceData.index}.jpg`} alternate='' fluid ui={false} />
                </Grid.Column> 
            
            <Grid.Column width={12}>
            
                <h2 style={{textAlign:"left",  borderBottom:"1px solid black"}}>
                {raceData.name}<Button color='red' style={{marginLeft:"10px"}} onClick={() => handleSelection(raceData.index)}>+select race</Button>
                </h2>
                <p style={{textAlign:"left", fontSize:"20px"}}>
                Size: {raceData.size}
                </p>
                <p style={{textAlign:"left", fontSize:"18px"}}>                
                    {raceData.alignment}                
                </p>
                <p style={{textAlign:"left", fontSize:"18px"}}>{raceData.size_description}</p>
            
            </Grid.Column>
            </Grid.Row>  
        
            </Grid>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                    >
                <HalfElfModal />
            </Modal>
            </>
    )
}
