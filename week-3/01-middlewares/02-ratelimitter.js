const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.use((req, res, next) => {
  const id = req.headers.id
  numberOfRequestsForUser[id] = (numberOfRequestsForUser[id] || 0 ) + 1
  if(numberOfRequestsForUser[id] >= 5){
   throw new Error('You have been blocked')
  }
  next()
})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});


app.use((err, req, res, next) => {
  console.log(err)
  res.status(404).send(err)
})

module.exports = app;