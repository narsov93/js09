const files = require('../files');
const dataFile = `${__dirname}/../juices.json`;

const getAll = async () => {
    let juices = await files.read(dataFile);
    return juices;
};

const getOne = async (index) => {
    let juices = await files.read(dataFile);
    if(juices[index]){
        return juices[index];
    }
    return null;
};

const create = async (data) => {
    let juices = await files.read(dataFile);
    juices = [...juices, data];
    await files.write(dataFile, juices);
};

const update = async (index, data) => {
    let juices = await files.read(dataFile);
    if(juices[index]){
        juices = juices.map((j, i) => {
            if(i === index){
                return data;
            }
            return j;
        });
    }
    await files.write(dataFile, juices);
};

const update = async (index, data) => {
    let juices = await files.read(dataFile);
    if(juices[index]){
        juices = juices.map((s, i) => {
            if(i === index){
                return {...j, ...data};
            }
            return j;
        });
    }
    await files.write(dataFile, juices);
};

const remove = async (index) => {
    let juices = await files.read(dataFile);
    juices = juices.filter((s, i) => {
        if(i !== index){
            return j;
        }
    });
    await files.write(dataFile, juices);
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
};