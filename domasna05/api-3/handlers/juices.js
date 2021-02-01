const juiceData = require('../pkg/juices/mongoose');

const getAllJuices = async (req, res) => {
    try{
        let data = await juiceData.getAll();
        res.status(200).send(data);
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const getOneJuice = async (req, res) => {
    let data = juiceData.getOne(req.params.id);
    if(data === null){
        return res.status(404).send('Not Found');
    }
    res.status(200).send(data);
};

const createJuice = async (req, res) => {
    try{
        await juiceData.create(req.body);
        res.status(201).send(req.body);
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateJuice = async (req, res) => {
    try{
        await juiceData.update(req.params.id, req.body);
        res.status(204).send(req.body);
    }catch(err){
        console.log(err);
        res.status(500).send('Intenral Server Error');
    }
};

const updateJuicePartial = async (req, res) => {
    try{
        await juiceData.updatePartial(req.params.id, req.body);
        res.status(204).send(req.body);
    }catch(err){
        console.log(err);
        res.status(500).send('Intenral Server Error');
    }
};

const deleteJuice = async (req, res) => {
    try{
        await juiceData.remove(req.params.id);
        res.status(204).send(req.body);
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAllJuices,
    getOneJuice,
    createJuice,
    updateJuice,
    updateJuicePartial,
    deleteJuice,
};



