#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

request(`https://swapi-api.hbtn.io/api/films/${movieId}`, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const movie = JSON.parse(body);
    console.log('Title:', movie.title);
  }
});
