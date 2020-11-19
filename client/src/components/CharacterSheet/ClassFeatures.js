import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Accordion } from 'semantic-ui-react'

export default function ClassFeatures(props) {
  const [classFeatures, setClassFeatures] = useState([])
  const [spellCasterData, setSpellCasterData] = useState([])
  const [spellCaster, setSpellcaster] = useState(false)
  const [accordionIndex, setAccordionIndex] = useState(-1)
  const [classProficiencies, setClassProficiencies] = useState([])
  const classSelection = useSelector(state=>state.classSelection)
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/classes/${classSelection}`)
      .then(res => res.json())
      .then(data => {
        setClassProficiencies(data.proficiencies)
        if(data.spellcasting !== undefined){
          setSpellcaster(true)
          setSpellCasterData(data.spellcasting.info)
        }
      })
      // The dnd API is a pretty spread out one, so we have to fetch twice in this component.
      fetch(`https://www.dnd5eapi.co/api/classes/${classSelection}/levels`)
      .then(res => res.json())
      .then(data => {
        setClassFeatures(data[0].features);
        setLoaded(true)
      })
  }, [props, classSelection])

  function handleAccordionClick(indexNum){
    const newIndex = accordionIndex === indexNum ? -1 : indexNum
    setAccordionIndex(newIndex)
  }

  return (
    <>{loaded && <div>
      <p>
        Proficencies: {classProficiencies.map((proficiency, index) => {
          return <span key={index}>{proficiency.name + " ♦ " }</span>})}
      </p>
      <p>
        Features: {classFeatures.map((feature, index) => {
          return <span key={index}> {feature.name + " ♦ "} </span>
        })}
      </p>
      {spellCaster && <><h4>Spellcasting Abilities:</h4>
        <p>{spellCasterData.map((description, index) => {                        
            return <Accordion key={index}>
              <Accordion.Title
                active={accordionIndex === index}
                index={index}
                onClick={() =>handleAccordionClick(index)}
                style={{color: 'indigo'}}
                            >
                {description.name}   
              </Accordion.Title>
              <Accordion.Content active={accordionIndex === index}>                        
                  {description.desc}                        
              </Accordion.Content>
            </Accordion>
            })} </p></>}
          </div>}</>
  )
}
