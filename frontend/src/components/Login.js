import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

   //On Textbox value change event to read values for login
   
  handleChange = e => this.setState({ [e.target.name]: e.target.value })

 login = () => {

    let user = { email: this.state.email,
                password: this.state.password }

    axios.post('http://localhost:3000/login', {user})
      .then( res =>  {
        localStorage.setItem('user_id', res.data.id);
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
        <Form style={myStyle} onSubmit={this.login}>
            <h1>Login</h1>
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
          onClick={this.login}>
          Login
        </Button>
        <Link href="/register">
          Register
        </Link>
        </Form>

      </center>
     )
    }
}