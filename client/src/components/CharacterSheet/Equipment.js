import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'

export default function Equipment(props) {
  const [equipment, setEquipment ] = useState([])
  const [startingEquipment, setStartingEquipment] = useState([])
  const classSelection = useSelector(state=>state.classSelection)


  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/starting-equipment/${classSelection}`)
    .then(res => res.json())
    .then(data => {
        setEquipment(data.starting_equipment)
        setStartingEquipment(data.starting_equipment_options
          .filter(option=>option.from[0]&& option.from[0].equipment)
          .map(option => option.from[0].equipment.name))

    })
  }, [props, classSelection])
  
  return (
    <>
    <Header>
      Equipment:
    </Header>
    <Container>
      {equipment.map((item, index) => <span key={index}>{item.equipment.name + '♦'}</span>)}
      {startingEquipment.map((item, index) => <span key={index}> {item + '♦'}</span>)}
    </Container>
    </>
  )
}
