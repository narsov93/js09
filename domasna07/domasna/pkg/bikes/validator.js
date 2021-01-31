const { Validator } = require('node-input-validator');

const bikeSchema = {
    brand: 'required|minLength:3',
    model: 'required|minLength:1',
    year: 'required',
    cc: 'required',
};

const bike = async (data, schema) => {
    let v = new Validator(data, schema);
    let res = await v.check();
    if(!res){
        throw v.errors;
    }
    return res;
};

module.exports = {
    bikeSchema,
    bike,
};