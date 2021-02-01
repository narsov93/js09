require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');

const shoes = require('./handlers/shoes');

const api = express();
api.use(bodyParser.json());

api.get('./shoes', shoes.getAllShoes);
api.get('./shoes/:id', shoes.getOneShoe);
api.post('./shoes', shoes.createShoe);
api.put('./shoes/:id', shoes.updateShoe);
api.patch('./shoes/:id', shoes.updateShoePartial);
api.delete('./shoes/:id', shoes.deleteShoe);

api.listen(10000, err => {
    if(err){
        return console.log('Could not start API', err);
    }
    console.log('Successfully started on port 10000');
});

