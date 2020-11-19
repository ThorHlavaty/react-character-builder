import React from 'react'
import { useSelector } from 'react-redux'
import {  Grid, Header, Segment } from 'semantic-ui-react'
import ClassFeatures from './ClassFeatures'
import Equipment from './Equipment'
import RacialTraits from './RacialTraits'

export default function CharacterStats(props) {
  const className = useSelector(state=>state.class)
  const circle = { width: 35, height: 35, fontSize:'10px', padding:'6px', margin:'auto', marginTop:'10px', border:'lightgray solid 1px', borderRadius:'50px' }
  function modCalc(stat){
    if(stat < 10){
      return "-1"
    }
    else if(stat < 12){
      return '0'
    }
    else{
      return '+' + Math.floor((stat - 10)/2)
    }
  }
  
  return (
    <>
    <Grid.Row>
      <Grid.Column width={2}>          
        <Segment color='red' inverted>
        Strength<br/>{props.stats[0]}<br/><Segment style={circle}>{modCalc(props.stats[0])}</Segment>
        </Segment>
      </Grid.Column>
      <Grid.Column width={2}>
        <Segment color='blue' inverted>
        Dexterity<br/>{props.stats[1]}<br/><Segment style={circle}>{modCalc(props.stats[1])}</Segment>
        </Segment>
      </Grid.Column >
      <Grid.Column width={12} only='computer tablet'>
        <RacialTraits race={props.race}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <Grid.Column width={2}>
        <Segment color='brown' inverted>
        Constitution<br/>{props.stats[2]}<br/><Segment style={circle}>{modCalc(props.stats[2])}</Segment>
        </Segment>
    </Grid.Column>
    <Grid.Column width={2}>
        <Segment color='purple' inverted>
        Wisdom<br/>{props.stats[3]}<br/><Segment style={circle}>{modCalc(props.stats[3])}</Segment>
        </Segment>
    </Grid.Column>
    <Grid.Column width={12} only='computer tablet'>
        <Equipment className={className}/>
    </Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <Grid.Column width={2}>
        <Segment color='green' inverted>
        Intelligence<br/>{props.stats[4]}<br/><Segment style={circle}>{modCalc(props.stats[4])}</Segment>
        </Segment>
    </Grid.Column>
    <Grid.Column width={2}>
        <Segment color='orange' inverted> 
        Charisma<br/>{props.stats[5]}<br/><Segment style={circle}>{modCalc(props.stats[5])}</Segment>
        </Segment>
      </Grid.Column>
      <Grid.Column width={12} only='mobile'>
        <RacialTraits race={props.race}/>
      </Grid.Column>    
      <Grid.Column width={12} only='mobile'>
        <Equipment className={className}/>
      </Grid.Column>
      <Grid.Column width={12}>
        <Header>
          Class Features
        </Header>
        <ClassFeatures className={className} />
      </Grid.Column> 
      </Grid.Row>
      </>
  )
}
