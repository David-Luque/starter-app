const express = require('express');
const authRoutes = express.Router();
const passport = require('passport');
const bcrypt = require ('bcryptjs');

const User = require('../models/user-model');


authRoutes.post('/signup', (req, res, next)=>{
  const { username, password } = req.body;

  if(!username || !password){
    res.status(400).json({ message: 'Provide username and password' });
    return;
  };

  if(password.length < 5){
    res.status(400).json({ message: 'Please make your password at least 6 characters long for security purposes' });
    return;
  };

  User.findOne({ username }, (err, foundUser)=>{
    
    if(err){
      res.status(500).json({ message: 'Username check error' });
      return;
    };

    if(foundUser){
      res.status(400).json({ message: 'Username taken. Please, choose another one' });
      return;
    };

    const salt = bcrypt.genSaltSync(10);
    const hashpass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      username: username,
      password: hashpass
    });

    aNewUser.save(err => {
      if(err){
        res.status(400).json({ message: 'Error saving user to database' });
        return;
      };

      // Automatically log in user after sign up: '.login()' is predefined passport method
      req.login(aNewUser, (err)=>{
        if(err){
          res.status(500).json({ message: 'Error login after signup' });
        };
        // Send the user's information to the frontend.
        //We can use also: res.status(200).json(req.user);
        res.status(200).json({ aNewUser });
      });
    });
  });
});

authRoutes.post('/login', (req, res, next)=>{
  passport.authenticate('local', (err, theUser, failureDetails)=>{
    if(err){
      res.status(500).json({ message: 'Error authenticating user' });
      return;
    };

    if(!theUser){
      // "failureDetails" contains the error messages from our logic in "LocalStrategy" { message: '...' }.
      res.status(401).json(failureDetails);
      return;
    };

    //save user in session
    req.login(theUser, (err)=>{
      if(err){
        res.status(500).json({ message: 'Session error' });
        return;
      };
      // We are now logged in (that's why we can also send req.user)
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

authRoutes.post('/logout', (req, res, next)=>{
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});

authRoutes.get('/loggedin', (req, res, next)=>{
  // 'req.isAuthenticated()' is defined by passport
  if(req.isAuthenticated()){
    res.status(200).json(req.user);
    return;
  };
  res.status(403).json({ message: 'Unauthorized' });
});

module.exports = authRoutes;