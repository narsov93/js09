const mongoose = require('mongoose');

const Bike = mongoose.model(
    'bikes',
    {
        brand: String,
        model: String,
        year: Date,
        cc: Number
    }
);

const getAll = async () => {
    return await Bike.find({});
};

const getOne = async (id) => {
    return await Bike.findOne({_id: id});
};

const create = async (data) => {
    let b = Bike(data);
    return await b.save();
};

const update = async (id, data) => {
    return Bike.updateOne({_id: id}, data);
};

const remove = async (id) => {
    return Bike.deleteOne({_id: id});
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove,
};