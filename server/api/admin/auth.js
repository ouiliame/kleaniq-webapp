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

const genericErrorResponse = (res) => (err) => {
  console.log(err);
  return res.json(makeError(Errors.Generic));
};

function findAdminUser(email, password = null) {
  if (password !== null) {
    return AdminUser.findOne({
      email: email.toLowerCase(),
      passwordHash: CryptoJS.SHA256(password, secretKey).toString()
    }).exec();
  } else {
    return AdminUser.findOne({
      email: email.toLowerCase()
    }).exec();
  }
}

function encrypt(message, key) {
  return CryptoJS.AES.encrypt(message, key).toString();
}

function decrypt(ciphertext, key) {
  return CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
}

function makeToken(user) {
  return jwt.sign({ challenge: encrypt(user.email, secretKey) }, secretKey, { expiresIn: '1h'});
}

function getUserWithToken(user, projection = ['name', 'affiliation', 'email', 'settings']) {
  var userInfo = _.pick(user, projection);
  userInfo.token = makeToken(user);
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
    }).catch(genericErrorResponse(res));
  }
});


// this is to "login"
authRouter.post('/token_login', (req, res) => {
  const token = req.body.token;
  jwt.verify(token, secretKey, (err, response) => {
    if (err) {
      switch (err.name) {
      case 'TokenExpiredError':
        return res.json(makeError(Errors.SessionExpired));
      default:
        return res.json(makeError(Errors.InvalidToken));
      }
    } else {
      findAdminUser(decrypt(response.challenge, secretKey)).then((user) => {
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

// this is to "validate" the token, gets back only a new token if true
authRouter.post('/validate_token', (req, res) => {
  const token = req.body.token;
  jwt.verify(token, secretKey, (err, response) => {
    if (err) {
      switch (err.name) {
      case 'TokenExpiredError':
        return res.json(makeError(Errors.SessionExpired));
      default:
        return res.json(makeError(Errors.InvalidToken));
      }
    } else {
      findAdminUser(decrypt(response.challenge, secretKey)).then((user) => {
        if (user === null) {
        // if we get here, very possible that secure key has been compromised!
          return res.json(makeError(Errors.SessionExpired));
        } else { // SUCCESS - give back a user with new token
          return res.json({token: makeToken(user)});
        }
      }).catch(genericErrorResponse);
    }
  });
});

module.exports = authRouter;
