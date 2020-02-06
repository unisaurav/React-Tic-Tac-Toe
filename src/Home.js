import React from 'react'
import { Button,InputGroup,FormControl } from 'react-bootstrap';

class Home extends React.Component{
  render(){
    return(
      <div>
      <p>Home page welcome</p>

      <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Button</Button>
    </InputGroup.Append>
  </InputGroup>
        
      <input></input>
      </div>
    )
  }
}
export default Home;