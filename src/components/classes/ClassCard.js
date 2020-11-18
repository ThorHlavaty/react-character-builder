//This Component is each individual class. 


import React, { useEffect, useState } from 'react'
import { Accordion, Button, Grid,  Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { useDispatch } from 'react-redux'
import { setClass } from '../../redux/actions'
import { useHistory } from 'react-router-dom'




export default function ClassCard(props) {
    
    const [classData, setClassData] = useState([])
    const [classProficiencies, setClassProficiencies] = useState([])
    const [classFeatures, setClassFeatures] = useState([])
    const [spellCasterData, setSpellCasterData] = useState([])
    const [spellCaster, setSpellcaster] = useState(false)
    const [accordionIndex, setAccordionIndex] = useState(-1)
    const dispatch = useDispatch()
    const history = useHistory()
    
    function handleAccordionClick(indexNum){
      const newIndex = accordionIndex === indexNum ? -1 : indexNum
      setAccordionIndex(newIndex)
    }

    function handleSelection(classSelection){
      dispatch(setClass(classSelection))
      history.push('/stats')
  }


    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${props.classNames}`)
          .then(res => res.json())
          .then(data => {
            setClassData(data);
            setClassProficiencies(data.proficiencies)
            if(data.spellcasting !== undefined){
              setSpellcaster(true)
              setSpellCasterData(data.spellcasting.info)
            }
          })
          // The dnd API is a pretty spread out one, so we have to fetch twice in this component.
          fetch(`https://www.dnd5eapi.co/api/classes/${props.classNames}/levels`)
          .then(res => res.json())
          .then(data => {
            setClassFeatures(data[0].features);
          })
      }, [props])
      

      

    return (
            
            <Grid celled>

        
            <Grid.Row> 
                <Grid.Column width={4}>
                    <Image src={`/classImages/${props.classNames}.jpg`} alternate='' fluid ui={false} />
                </Grid.Column> 
            
            <Grid.Column width={12}>
            
                <h2 style={{textAlign:"left",  borderBottom:"1px solid black"}}>
                    {classData.name}<Button color='red' style={{marginLeft:"10px"}} onClick={() => handleSelection(classData.index)}>+select class</Button>
                </h2>
                <p style={{textAlign:"left", fontSize:"14px"}}>
                Proficencies: {classProficiencies.map(proficiency => {
                  return proficiency.name + " ♦ "})}
                </p>
                <p style={{textAlign:"left", fontSize:"14px"}}>
                    Features: {classFeatures.map(feature => {
                        return feature.name + " ♦ "
                    })}
                </p>
                {/* This checks if the class can cast spells. If so, we render the details and make them clickable if you want to learn more. */}
                {spellCaster && <><h2>As a spellcaster:</h2>
                <p style={{textAlign:"left"}}>{spellCasterData.map((description, index) => {                        
                    return <Accordion>
                      <Accordion.Title
                        active={accordionIndex === index}
                        index={index}
                        onClick={() =>handleAccordionClick(index)}
                        style={{color: 'indigo'}}
                                    >
                        {description.name}   
                      </Accordion.Title>
                      <Accordion.Content active={accordionIndex === index}>
                        <p>
                          {description.desc}
                        </p>
                      </Accordion.Content>
                    </Accordion>
                    })} </p></>}
                    
            </Grid.Column>
            </Grid.Row> 
            </Grid>
        
    )
}