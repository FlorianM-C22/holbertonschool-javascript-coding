#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = (`http://loripsum.net/api/${process.argv[2]}`);

request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    let writeStream = fs.createWriteStream(`${process.argv[3]}.txt`, { encoding: 'utf-8' });
    writeStream.write(body);
    writeStream.end();
  }
});
