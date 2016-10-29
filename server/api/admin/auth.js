import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import AdminUser from '../models/AdminUser';
const secretKey = require('../../../config').secretKey;
import SHA256 from 'crypto-js/SHA256';

import express from 'express';
const authRouter = express.Router();

authRouter.post('/login', (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  if (email === undefined || password === undefined) {
    res.json({
      error: true,
      message: "You must enter both a username and a password."
    });
  }

  AdminUser
    .findOne({
      email: email.toLowerCase(),
      password_hash: SHA256(password).toString()
    }, 'name affiliation email', (err, user) => {
      if (err)
        return res.json({error: true, message: "Please try again later."});
      if (user === null)
        return res.json({error: true, message: "Incorrect email / password combination."});

      const accountDetails = {
        name: user.name,
        affiliation: user.affiliation,
        email: user.email
      };

      return res.json({error: false, token: jwt.sign(accountDetails, secretKey)});
    });
});

module.exports = authRouter;
