require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');

const juices = require('./handlers/juices');

const api = express();
api.use(bodyParser.json());

api.get('./juices', juices.getAllJuices);
api.get('./juices/:id', juices.getOneJuice);
api.post('./juices', juices.createJuice);
api.put('./juices/:id', juices.updateJuice);
api.patch('./juices/:id', juices.updateJuicePartial);
api.delete('./juices/:id', juices.deleteJuice);

api.listen(10000, err => {
    if(err){
        return console.log('Could not start API', err);
    }
    console.log('Successfully started on port 10000');
});

