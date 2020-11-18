import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Segment } from 'semantic-ui-react'

export default function HomePage() {
    return (
        <Segment color='black' inverted style={{borderRadius:"0px", marginTop:"0px", height:"100vh"}}>
            
            <Header style={{ marginTop:"25vh"}} as='h1'>
                WELCOME TO THE THORGE
            </Header>
            <Header as="h4">
                (A character forge made by <a href='https://www.linkedin.com/in/thor-hlavaty-7589431b5/' rel="noreferrer" target='_blank'>Thor Hlavaty</a>)
            </Header>
            <Link to="/races">
            <Button color="red" style={{width:"250px", marginTop:"5px", border:"solid 1px dimgrey"}}>
                Thorge a Character
            </Button>
            </Link>
            <br />
            <Button color="red" style={{marginTop:"10px", width:"250px", border:"solid 1px dimgrey"}}>
                Show me that which is Thorged
            </Button>
        </Segment>
    )
}
