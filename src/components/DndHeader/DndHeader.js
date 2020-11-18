import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function DndHeader() {
    
    return (                     
      <Menu inverted color='red' style={{marginBottom:'0px', borderRadius:"0px"}}>
        <Link to="/">
        <Menu.Item>  
                Home
        </Menu.Item>
        </Link>
        <Link to="/races">
        <Menu.Item>
                Thorge a Character
        </Menu.Item>
        </Link>
        <Menu.Item
          name='Show Characters'
        //   active={setActiveItem('messages')}
        //   onClick={this.handleItemClick}
        />
      </Menu>        
    )
}
