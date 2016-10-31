import jwt from 'jsonwebtoken';
import AdminUser from '../models/AdminUser';

const secretKey = require('../../../config').secretKey;
import CryptoJS from 'crypto-js';

import _ from 'lodash';
import express from 'express';

const authRouter = express.Router();

// CONSTANTS

const Errors = {
  Generic: 'Please try again later',
  SessionExpired: 'Session expired. Please login again.',
  InvalidToken: 'Token request invalid.',
  InvalidLoginRequest: 'Invalid request. Please enter both email and password.',
  InvalidLoginCredentials: 'Invalid email / password combination.'
};

// UTILS


function makeError(message) {
  return {
    error: {
      message
    }
  };
}

const genericErrorResponse = () => makeError(Errors.Generic);

function findAdminUser(email, password = null) {
  if (password !== null) {
    return AdminUser.findOne({
      email: email.toLowerCase(),
      password_hash: CryptoJS.SHA256(password).toString()
    }, 'name affiliation email').exec();
  } else {
    return AdminUser.findOne({
      email: email.toLowerCase()
    }, 'name affiliation email').exec();
  }
}

function encrypt(message, key) {
  return CryptoJS.AES.encrypt(message, key).toString();
}

function decrypt(ciphertext, key) {
  return CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
}

function getUserWithToken(user) {
  var userInfo = _.pick(user, ['name', 'affiliation', 'email']);
  const token = jwt.sign(userInfo, secretKey, { expiresIn: '1h'});
  userInfo.token = token;
  return userInfo;
}





// ROUTES

authRouter.post('/login', (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  if (email === undefined || password === undefined) {
    res.json(makeError(Errors.InvalidLoginRequest));
  } else {
    findAdminUser(email, password).then((user) => {
      if (user === null) {
        return res.json(makeError(Errors.InvalidLoginCredentials));
      } else {
        return res.json({user: getUserWithToken(user)});
      }
    }).catch(genericErrorResponse);
  }
});

authRouter.post('/validate_token', (req, res) => {
  const token = req.body.token;
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      switch (err.name) {
      case 'TokenExpiredError':
        return res.json(makeError(Errors.SessionExpired));
      default:
        return res.json(makeError(Errors.InvalidToken));
      }
    } else {
      findAdminUser(user.email).then((user) => {
        if (user === null) {
        // if we get here, very possible that secure key has been compromised!
          return res.json(makeError(Errors.SessionExpired));
        } else { // SUCCESS - give back a user with new token
          return res.json({user: getUserWithToken(user)});
        }
      }).catch(genericErrorResponse);
    }
  });
});

module.exports = authRouter;
