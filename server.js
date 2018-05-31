'use strict';

const express = require('express');
const cors = require('cors');
const {PORT, DATABASE_URL} = require('./config');
const {User} = require('./models');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// app.use(
//     cors({
//         origin: CLIENT_ORIGIN
//     })
// );
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'Content-Type');
  // res.header('Access-Control-Allow-Origin', 'GET');
  res.header('Access-Control-Allow-Origin', 'GET, POST, PUT, PATCH, DELETE');

  next();
});


app.get('/user/:id', (req, res) => {
  User
    .findById(req.params.id)
    .then(user => res.json(user.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.post('/user', (req, res) -> {
  const requiredFields = ['firstName', 'lastName', 'userName', 'password', 'email'];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    };
  };

  User
    .create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email
    })
    .then(user => res.status(201).json(user.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.listen(8080);

----------------------------------


app.use('*', function (req, res) {
  res.status(404).json({ message: 'Not Found' });
});



let server;

function runServer(databaseUrl, port = PORT) {
  return new Promise((resolve, reject) => {
    console.log('Starting server');
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };
