import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function DndHeader() {
    const classSelection = useSelector(state=> state.classSelection)

    function colorSelector(){
      if(classSelection === 'barbarian') {
        return 'red'
      }
      else if(classSelection === 'bard') {
        return 'pink'
      }
      else if(classSelection === 'cleric') {
        return 'green'
      }
      else if(classSelection === 'druid') {
        return 'olive'
      }
      else if(classSelection === 'fighter') {
        return 'grey'
      }
      else if(classSelection === 'monk') {
        return 'blue'
      }
      else if(classSelection === 'paladin') {
        return 'yellow'
      }
      else if(classSelection === 'ranger') {
        return 'brown'
      }
      else if(classSelection === 'rogue') {
        return 'black'
      }
      else if(classSelection === 'sorcerer') {
        return 'teal'
      }
      else if(classSelection === 'warlock') {
        return 'orange'
      }
      else if(classSelection === 'wizard') {
        return 'purple'
      }
      else{
        return 'red'
      }
    }

    return (                     
      <Menu inverted color={`${colorSelector()}`} style={{marginBottom:'0px', borderRadius:"0px"}}>
        <Menu.Item as={Link} to='/'>  
                Home
        </Menu.Item>
        <Menu.Item as={Link} to='/races'>
                Thorge a Character
        </Menu.Item>
        <Menu.Item
          name='Show Characters'
          as={Link}
          to='/characters'
        />
      </Menu>        
    )
}
