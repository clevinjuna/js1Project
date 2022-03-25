// import { Film } from "./client/assets/js/film.mjs";
// import path from 'path';
// import app from 'express';
// import {srcListe} from './data/liste.js';
const { application } = require('express');
const path = require('path');
let app = require('express')();
const Liste = require('./data/liste');

app.listen(3000, () => {
  console.log('Server Launch on Port : 3000');
});

/* 
  Si vous avez défini votre instance d'express sur 2 lignes
  const express = require('express')
  puis
  let app = express()
  =>
  app.use('/client', express.static('./client'));
*/
app.use('/pages', require('express').static('./client/pages'));
app.use('/assets', require('express').static('./client/assets'));

app.use(require('express').json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

app.get('/liste', (req, res) => {
  res.send(Liste);
});
app.get('/liste/modifier/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/pages/modifier.html'));
})

app.put('/liste/modifier/:id', (req, res) => {
  let myId = req.params.id;
  const indice = Liste.findIndex((element) => element.id == myId);
  if (indice != -1) {
    Liste.splice(indice, 1, req.body);
    res.send(Liste);
  } else {
    res.status(404).send("element non trouvé dans la liste pour modification")
  }
})

app.delete('/liste/delete/:id', function(req, res) {
  let myId = req.params.id;
  const indice = Liste.findIndex((element) => element.id == myId);
  if (indice != -1) {
    Liste.splice(indice, 1);
    res.send(Liste);
  } else {
    res.status(404).send("element non trouvé dans la liste")
  }
});

app.post('/pages/ajouter', function(req, res) {

  console.log("body", req.body);

  Liste.push(req.body)

  console.log("JSONFILE", Liste);
  // result sent
  res.status(200).json(Liste);
  
});
// Pour parcourir le body d'une requête on peut utiliser body-parser 
// qui est un package facilitant l'accès au body depuis le paramètre req
app.post('/liste', (req, res) => {
  Liste.push(req.body);
  res.send(Liste);
});

app.get('/liste/:id', (req, res) => {
  let myId = req.params.id;
  Liste.forEach(element => {
    if(element.id == myId) {
      res.send(element);
    }
  });
});
