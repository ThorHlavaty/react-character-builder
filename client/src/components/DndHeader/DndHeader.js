import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function DndHeader() {
    
    return (                     
      <Menu inverted color='red' style={{marginBottom:'0px', borderRadius:"0px"}}>
        <Menu.Item as={Link} to='/'>  
                Home
        </Menu.Item>
        <Menu.Item as={Link} to='/races'>
                Thorge a Character
        </Menu.Item>
        <Menu.Item
          name='Show Characters'
        //   active={setActiveItem('messages')}
        //   onClick={this.handleItemClick}
        />
      </Menu>        
    )
}
