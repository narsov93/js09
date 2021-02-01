const files = require('../files');
const dataFile = `${__dirname}/../shoes.json`;

const getAll = async () => {
    let shoes = await files.read(dataFile);
    return shoes;
};

const getOne = async (index) => {
    let shoes = await files.read(dataFile);
    if(shoes[index]){
        return shoes[index];
    }
    return null;
};

const create = async (data) => {
    let shoes = await files.read(dataFile);
    shoes = [...shoes, data];
    await files.write(dataFile, shoes);
};

const update = async (index, data) => {
    let shoes = await files.read(dataFile);
    if(shoes[index]){
        shoes = shoes.map((s, i) => {
            if(i === index){
                return data;
            }
            return s;
        });
    }
    await files.write(dataFile, shoes);
};

const update = async (index, data) => {
    let shoes = await files.read(dataFile);
    if(shoes[index]){
        shoes = shoes.map((s, i) => {
            if(i === index){
                return {...s, ...data};
            }
            return s;
        });
    }
    await files.write(dataFile, shoes);
};

const remove = async (index) => {
    let shoes = await files.read(dataFile);
    shoes = shoes.filter((s, i) => {
        if(i !== index){
            return s;
        }
    });
    await files.write(dataFile, shoes);
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
};