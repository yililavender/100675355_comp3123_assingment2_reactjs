import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
   
  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  register = () => {

    let user = { email: this.state.email,
                password: this.state.password }

    axios.post('http://localhost:8081/api/user/register', {user})
      .then( res =>  {console.log(res.data.user)
        this.props.history.push('/')
      }

    ).catch(err => 
    err.response.data.errorMessage
    )
   }

  render() {
      const myStyle = {
          margin: 'auto',
          width: '50%',
          border: '3px solid green',
          padding: '10px'
    }
    return (

      <center>
        <Form style={myStyle} onSubmit={this.register}>
            <h1>Register</h1>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={this.handleChange} placeholder="Email" />          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name= "password" type="password" onChange={this.handleChange} placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Button 
          variant="success" type="submit"
          disabled={this.state.email == '' && this.state.password == ''}
          onClick={this.register}>
          Register
        </Button>
        <Link href="/login">
          Login
        </Link>
        </Form>

      </center>
     )
    }
}
