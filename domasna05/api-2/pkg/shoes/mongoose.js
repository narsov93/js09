const mongoose = require('mongoose');

const Shoes = mongoose.model(
    'shoes',
    {
        brand: String,
        model: String,
        year: Number
    },
    'shoes'
);

const getAll = async () => {
    let shoes = await Shoes.find({});
    return shoes;
};

const getOne = async () => {
    let shoes = await Shoes.findOne({_id: id});
    return shoes;
};

const create = async (data) => {
    let shoe = new Shoes(data);
    await shoe.save();
};

const update = async (id, data) => {
    await Shoes.updateOne({_id: id}, data);
};

const updatePartial = async (id, data) => {
    await Shoes.updateOne({_id: id}, data);
};

const remove = async (id) => {
    await Shoes.deleteOne({_id: id});
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
};