const files = require('../files');
const dataFile = `${__dirname}/../bikes.json`;

const getAll = async () => {
    let bikes = await files.read(dataFile);
    return bikes;
};

const getOne = async (index) => {
    let bikes = await files.read(dataFile);
    if(bikes[index]){
        return bikes[index];
    }
    return null;
};

const create = async (data) => {
    let bikes = await files.read(dataFile);
    bikes = [...bikes, data];
    await files.write(dataFile, bikes);
};

const update = async (index, data) => {
    let bikes = await files.read(dataFile);
    if(bikes[index]){
        bikes = bikes.map((b, i) => {
            if(i === index){
                return data;
            }
            return b;
        });
    }
    await files.write(dataFile, bikes);
};

const updatePartial = async (index, data) => {
    let bikes = await files.read(dataFile);
    if (bikes[index]) {
        bikes = bikes.map((b, i) => {
            if (i === index) {
                return {...b, ...data};
            }
            return b;
        });
    }
    await files.write(dataFile, bikes);
};

const remove = async (index) => {
    let bikes = await files.read(dataFile);
    bikes = bikes.filter((b, i) => {
        if(i !== index){
            return b;
        }
    });
    await files.write(dataFile, actors);
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
};