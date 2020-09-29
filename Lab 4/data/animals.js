const mongoCollections = require('../mongoCollections');
const animals = mongoCollections.animals;
const { ObjectId } = require('mongodb');


async function create(name, animalType){
if(typeof name!='string') throw "Animal name should be a string!";
if(typeof animalType!='string') throw "Animal type should be a string!";

if(!name) throw "Name of animal cannot be undefined";
if(!animalType) throw "Type of animal cannot be undefined!";

const animalCollection = await animals();

let newAnimal = {
    name: name,
    animalType: animalType
  };

  const insertInfo = await animalCollection.insertOne(newAnimal);
    if (insertInfo.insertedCount === 0) throw 'Could not add animal';

    const newId = insertInfo.insertedId;
    newIdString=newId.toString();
    const animal = await this.get(newIdString);
    return animal;
}

async function getAll(){
    const animalCollection = await animals();

    const allAnimals = await animalCollection.find({}).toArray();

    return allAnimals;
}

async function get(id){
    if (!id) throw 'You must provide an id to search for';
   // if(typeof id!='string') throw "Id should be a string!";
    const animalCollection=await animals();

    const objId = ObjectId.createFromHexString(id);
    const animo = await animalCollection.findOne({_id: objId});
    if (animo === null) throw 'No animal with that id';

    return animo;
    
  
}

async function remove(id){
    if (!id) throw 'You must provide an id to search for';

    const animalCollection = await animals();
    const objId = ObjectId.createFromHexString(id);
    
    const deletionInfo = await animalCollection.removeOne({_id: objId});

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete animal with id of ${id}`;
    }
}

async function rename(id, newName){

    if(typeof newName!='string') throw "Animal name should be a string!";
    if(!newName) throw "Name of animal cannot be undefined";
    if(!id) throw "Id field not valid!";
    
    const animalCollection = await animals();

    const renameAnimal={
    name: newName
    };
    const objId = ObjectId.createFromHexString(id);
    const updatedInfo = await animalCollection.updateOne({_id: objId}, {$set: renameAnimal});
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not update name of animal!';
    }

    return await this.get(id);
}



module.exports={create, getAll, get, remove, rename}