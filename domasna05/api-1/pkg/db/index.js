const mongoose = require('mongoose');

const username = 'arsovn';
const password = 'Pa$$w0rd';
const host = 'cluster0.k9uiu.mongodb.net/';
const dbname = 'js09';

mongoose.connect(
    `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if(err){
            return console.log('Could not connect to DB', err);
        }
        console.log('Successfully connected to database');
    }
);