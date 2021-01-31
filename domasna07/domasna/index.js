const config = require('./pkg/config');
require('./pkg/db');
const express = require('express');
const bodyParser = require('body-parser');
const bikes = require('./handlers/bikes');

const api = express();
api.use(bodyParser.json());

api.get('/api/v1/bikes', bikes.getAll);
api.get('/api/v1/bikes/:id', bikes.getOne);
api.get('/api/v1/bikes', bikes.create);
api.get('/api/v1/bikes/:id', bikes.update);
api.get('/api/v1/bikes/:id', bikes.updatePartial);
api.get('/api/v1/bikes/:id', bikes.remove);

api.listen(config.get('server').port, err => {
    if(err){
        console.log(err);
    }
    console.log('Server successfully started on port', config.get('server').port);
});
