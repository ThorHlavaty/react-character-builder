import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import PointSpender from './PointSpender'

export default function Attribute(props) {
    const [racialBonus, setRacialBonus] = useState(0)
    const race = useSelector((state)=> state.race)
    const halfElfBonusStats = useSelector((state)=>state.halfElfBonusStats)


    useEffect(()=>{
        //Unfortunetly, the API doesn't have a great way of tracking race bonuses. It was either dig into the guts of the API, or just create the logic myself.
        //I've played d&d, so inserting the logic was easy but tedious.
        if (props.attribute === "Strength" && (race === 'human' || halfElfBonusStats.includes('str'))){
            setRacialBonus(1)
        }
        else if (props.attribute === "Dexterity" && (race === 'human' || halfElfBonusStats.includes('dex'))){
            setRacialBonus(1)
        }
        else if (props.attribute === "Constitution" && (race === 'human' || halfElfBonusStats.includes('con') || race==='half-orc' || race==='gnome')){
            setRacialBonus(1)
        }
        else if (props.attribute === "Wisdom" && (race === 'human' || halfElfBonusStats.includes('wis') || race ==='dwarf' || race === 'halfling')){
            setRacialBonus(1)
        }
        else if (props.attribute === "Intelligence" && (race === 'human' || halfElfBonusStats.includes('int') || race ==='elf' || race === 'tiefling')){
            setRacialBonus(1)
        }
        else if (props.attribute === "Charisma" && (race === 'human' || race === 'dragonborn')){
            setRacialBonus(1)
        }
        else if (props.attribute === "Strength" && (race === 'half-orc' || race === 'dragonborn')){
            setRacialBonus(2)
        }
        else if (props.attribute === "Dexterity" && (race === 'elf' || race === 'halfling')){
            setRacialBonus(2)
        }
        else if (props.attribute === "Constitution" && race === 'dwarf'){
            setRacialBonus(2)
        }
        else if (props.attribute === "Intelligence" && (race === 'gnome' )){
            setRacialBonus(2)
        }
        else if (props.attribute === "Charisma" && (race === 'tiefling' || race === 'half-elf')){
            setRacialBonus(2)
        }
        
    }, [race, props, halfElfBonusStats])
    
    return (        
      <Grid.Column style={{marginTop:'8px'}}>
          <PointSpender racialBonus={racialBonus} name={props.attribute} />
          <div>Racial Bonus: {racialBonus}</div>
      </Grid.Column>        
    )
}
