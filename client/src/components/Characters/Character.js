import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Divider, Grid, Icon, Segment } from 'semantic-ui-react'
import { setCharSubmitted } from '../../redux/actions'

export default function Character(props) {
  const dispatch = useDispatch()
  
  function colorSelector(){
    if(props.character.class === 'barbarian') {
      return 'red'
    }
    else if(props.character.class === 'bard') {
      return 'pink'
    }
    else if(props.character.class === 'cleric') {
      return 'green'
    }
    else if(props.character.class === 'druid') {
      return 'olive'
    }
    else if(props.character.class === 'fighter') {
      return 'grey'
    }
    else if(props.character.class === 'monk') {
      return 'blue'
    }
    else if(props.character.class === 'paladin') {
      return 'yellow'
    }
    else if(props.character.class === 'ranger') {
      return 'brown'
    }
    else if(props.character.class === 'rogue') {
      return 'black'
    }
    else if(props.character.class === 'sorcerer') {
      return 'teal'
    }
    else if(props.character.class === 'warlock') {
      return 'orange'
    }
    else if(props.character.class === 'wizard') {
      return 'purple'
    }
  }
  
  function handleDelete(){
      fetch(`/api/v1/characters/${props.character.id}`, {
        method: 'DELETE'})
        .then(res => {
          dispatch(setCharSubmitted(false))
          dispatch(setCharSubmitted(true))
          }
        )
      }
  

  

  return (
    <Grid.Column>
    <Segment inverted style={{paddingLeft:'2px', paddingTop:'1px', paddingBottom:'2px', paddingRight:'1px', textShadow:'2px 2px black'}}>
      <Segment color={`${colorSelector()}`} inverted style={{marginBottom:"0px", borderBottomLeftRadius:'0px', borderBottomRightRadius:'0px', padding:'10px', borderBottom:'1px solid dimgray', fontSize:"20px"}}>
        <Grid columns={2} as={Link} to={`/characters/${props.character.id}`} style={{color:'White'}}>
          <Divider vertical hidden />
          <Grid.Row>
            <Grid.Column textAlign="left" style={{borderRight:'1px solid dimgray'}}>
              Character: 
            </Grid.Column>
            <Grid.Column textAlign='right'>
              {props.character.name}
            </Grid.Column>            
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color={`${colorSelector()}`} inverted style={{marginTop:"0px", marginBottom:'0px', borderRadius:'0px', padding:'10px', borderBottom:'1px solid dimgray', fontSize:"20px"}}>
        <Grid columns={2} as={Link} to={`/characters/${props.character.id}`} style={{color:'White'}}>
          <Divider vertical hidden />
          <Grid.Row>
            <Grid.Column textAlign="left"  style={{borderRight:'1px solid dimgray'}}>
              Class: 
            </Grid.Column>
            <Grid.Column textAlign='right'>
              {props.character.class.charAt(0).toUpperCase()}{props.character.class.slice(1)}
            </Grid.Column>            
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color={`${colorSelector()}`} inverted style={{marginTop:"0px", marginBottom:'0px', borderRadius:'0px', padding:'10px', borderBottom:'1px solid dimgray', fontSize:"20px"}}>
        <Grid columns={2} as={Link} to={`/characters/${props.character.id}`} style={{color:'White'}}>
          <Divider vertical hidden/>
          <Grid.Row>
            <Grid.Column textAlign="left" style={{borderRight:'1px solid dimgray'}}> 
              Race: 
            </Grid.Column>
            <Grid.Column textAlign='right'>
              {props.character.race.charAt(0).toUpperCase()}{props.character.race.slice(1)}
            </Grid.Column>            
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color={`${colorSelector()}`} inverted style={{marginTop:"0px", borderTopLeftRadius:'0px', borderTopRightRadius:'0px', padding:'10px', fontSize:"20px"}}>
        <Grid columns={2}  style={{color:'White'}}>
          <Divider vertical hidden/>
          <Grid.Row>
            <Grid.Column textAlign="left" style={{borderRight:'1px solid dimgray'}}> 
              Delete Character? 
            </Grid.Column>
            <Grid.Column  textAlign='right'>
              <Button style={{paddingTop:'5px', paddingBottom:'0px', paddingLeft:'12px'}} icon onClick={() => handleDelete()} color={`${colorSelector()}`}><Icon name='user delete'/></Button>
            </Grid.Column>            
          </Grid.Row>
        </Grid>
      </Segment>
    </Segment>
</Grid.Column>
  )
}


