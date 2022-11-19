import React, { useRef, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = (props) => {
      
    const emailRef = useRef()
    const passwordRef = useRef()
    
    var email = ""
    var password  = ""
   
    const myStyle = {
          margin: 'auto',
          width: '50%',
          border: '3px solid green',
          padding: '10px'
    }
    
    useEffect(() => {
      document.title = `${email}Labe 10 Exec Solution`
    })
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      email = emailRef.current.value
      password  = passwordRef.current.value
           
    }
  
    return (
        <center>
        <Form style={myStyle} onSubmit={handleSubmit}>
            <h1>Log In</h1>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>password</Form.Label>
      <Form.Control name= "password" type="text" ref={passwordRef} placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Button variant="success" type="submit">
    Submit
  </Button>
</Form>
<div>
  <h1>Input Details</h1>
    <p>{email}</p>
    <p>{password}</p>
</div>
        </center>
      );
}
  
export default Login
