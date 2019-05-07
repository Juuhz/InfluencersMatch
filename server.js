#!/usr/bin/env nodejs
const express = require('express');
const next = require('next');
const axios = require('axios');

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
  dir: './src'
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/mailchimp', (req, res) => {
    
    const mailchimp = axios.create({
      baseURL: 'https://us19.api.mailchimp.com/3.0/lists/97c6fc29a5/members/',
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'luancubas 13e77c7efec11927db6f654700c195ef-us19'
      },
      data: {
        email_address: req.query.email,
        status: 'subscribed'
      }
    });

    mailchimp.request({
      method: 'POST'
    }).then(function (response) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({'success':'true'}));
    });

  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });

});