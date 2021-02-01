const shoeData = require('../pkg/shoes/mongoose');

const getAllShoes = async (req, res) => {
    try{
        let data = await shoeData.getAll();
        res.status(200).send(data);
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const getOneShoe = async (req, res) => {
    let data = shoeData.getOne(req.params.id);
    if(data === null){
        return res.status(404).send('Not Found');
    }
    res.status(200).send(data);
};

const createShoe = async (req, res) => {
    try{
        await shoeData.create(req.body);
        res.status(201).send(req.body);
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateShoe = async (req, res) => {
    try{
        await shoeData.update(req.params.id, req.body);
        res.status(204).send(req.body);
    }catch(err){
        console.log(err);
        res.status(500).send('Intenral Server Error');
    }
};

const updateShoePartial = async (req, res) => {
    try{
        await shoeData.updatePartial(req.params.id, req.body);
        res.status(204).send(req.body);
    }catch(err){
        console.log(err);
        res.status(500).send('Intenral Server Error');
    }
};

const deleteShoe = async (req, res) => {
    try{
        await shoeData.remove(req.params.id);
        res.status(204).send(req.body);
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAllShoes,
    getOneShoe,
    createShoe,
    updateShoe,
    updateShoePartial,
    deleteShoe,
};



