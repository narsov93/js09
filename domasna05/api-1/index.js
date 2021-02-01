require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');

const bikes = require('./handlers/bikes');

const api = express();
api.use(bodyParser.json());

api.get('/bikes', bikes.getAllBikes);
api.get('/bikes/:id', bikes.getOneBike);
api.post('/bikes', bikes.createBike);
api.put('/bikes/:id', bikes.updateBike);
api.patch('/bikes/:id', bikes.updateBikePartial);
api.delete('/bikes/:id', bikes.deleteBike);

api.listen(10000, err => {
    if(err){
        return console.log('Could not start API', err);
    }
    console.log('Server successfully started on port 10000');
});