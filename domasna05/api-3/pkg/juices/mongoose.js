const mongoose = require('mongoose');

const Juices = mongoose.model(
    'juices',
    {
        brand: String,
        model: String,
        year: Number
    },
    'juices'
);

const getAll = async () => {
    let juices = await Juices.find({});
    return juices;
};

const getOne = async () => {
    let juices = await Juices.findOne({_id: id});
    return juices;
};

const create = async (data) => {
    let juice = new Juices(data);
    await juice.save();
};

const update = async (id, data) => {
    await Juices.updateOne({_id: id}, data);
};

const updatePartial = async (id, data) => {
    await Juices.updateOne({_id: id}, data);
};

const remove = async (id) => {
    await Juices.deleteOne({_id: id});
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
};