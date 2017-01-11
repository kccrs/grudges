'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const md5 = require('md5');
const cors = require('express-cors');
const path = require('path');
const fs = require('fs');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('port', process.env.PORT || 3001);

app.locals.title = 'Grudge Match';
app.locals.grudges = [
  {
    id: 4,
    name: 'Casey',
    offense: 'letting this assessment get to you',
    forgiven: false
  },
  {
    id: 17,
    name: 'doubt',
    offense: 'being a jerk',
    forgiven: false
  }
];

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`);
});

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


app.get('/grudges', (request, response) => {
  // response.send({ grudges: app.locals.grudges });
  response.json(app.locals.grudges);
});
//
// app.get('/grudges/:id', (request, response) => {
//   let { id } = request.params;
//
//   let grudge = app.locals.grudges.find(g => g.id == id);
//   if (grudge) { return response.send({ grudge }); }
//   else { return response.sendStatus(404); }
//   // if (!grudge) { return response.sendStatus(404); }
//
//   // response.json({ id, grudge });
// });

app.post('/grudges', (request, response) => {

  // const { name, offense } = request.body;
  const newGrudge = {
    id: md5(newGrudge),
    name: request.body.name,
    offense: request.body.offense,
    forgave: false
  };

  if (!newGrudge) {
    return response.status(422).send({
      error: 'No grudges today?'
    });
  }
  app.locals.grudges.push(newGrudge);
  // return response.send({ grudge, id });
  // app.locals.grudges[id] = grudge;
  response.json(app.locals.grudges);
  // response.status(201).json({ id, grudge });
});

module.exports = app;
