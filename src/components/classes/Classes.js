import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Header } from 'semantic-ui-react'
import ClassCard from './ClassCard'

export default function Classes() {
    const [classNames, setClassNames] = useState([])
    // dispatch = useDispatch()
    const race = useSelector((state)=> state.race)

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes`)
          .then(res => res.json())
          .then(data => {
            setClassNames(data.results);
          })
      }, [])
    
    return (
        <div>
            <Header as="h1" style={{marginTop:"5px"}}>
            You chose {race}.
            <br />Now, choose your class.
        </Header>
            {classNames.map((classNames, index) => {
                return <ClassCard classNames={classNames.index} key={index}/>
            })}
        </div>
    )
}