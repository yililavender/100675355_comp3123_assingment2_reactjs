const express = require('express');
const userModel = require('../models/User');
const app = express();

// {"username": "p@p.com",
// "password": "password$123" 
// }

// { "status": true,
// "username": "p@p.com", 
// "message": "User logged in successfully",
// "jwt_token": "Optional implementation"
// }



//http://localhost:8081/api/user/signup
app.post('/signup', async (req, res) => { 
    try {
      const new_user = await new userModel(req.body);
      await new_user.save();
      res.status(201).send(new_user);
    } catch (err) {
      res.status(500).send(err);
    }
  });


//http://localhost:8081/api/user/login
app.post('/login', async (req, res) => {
    try {
      const find_user = await userModel.findOne({username: req.body.username})
      
      if (!find_user ){
        return  res.status(404).json({status:"false",message: "Invalid username or password"})
      }

      if (req.body.password!=find_user.password) {
            return  res.status(400).json({status:"false",message: "Invalid username or password"})
      }
  
      res.status(204).json({
            "status": true,
            "email": find_user.username, 
            "message": "User logged in successfully",
            "jwt_token": "Optional implementation"
          })
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = app
