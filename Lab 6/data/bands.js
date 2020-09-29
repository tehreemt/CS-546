const mongoCollections = require('../config/mongoCollections');
const bands = mongoCollections.bands;
const { ObjectId } = require('mongodb');
//const uuid = require('uuid');
//const album1=require("../data/albums");

async function addBand(bandName, bandMembers, yearFormed, genres, recordLabel){
    if (!bandName) throw 'You must provide a name for your band';
    if(typeof(bandName)!='string') throw 'Name of band should be of type: string';
    if (!bandMembers || !Array.isArray(bandMembers)) throw 'You must provide an array of band members';
    for(let i=0;i<bandMembers.length;i++){
      if(typeof(bandMembers[i])!='string') throw 'Name of band member should be of type string';
    }
    if (!yearFormed) throw 'You must provide the year your band was formed';
    if (typeof(yearFormed)!='number') throw 'Year should be of type:  number';
    if (!genres || !Array.isArray(genres)) throw 'You must provide an array of genres';
    for(let g=0;g<genres.length;g++){
      if(typeof(genres[g])!='string') throw 'Genres should be of type string';
    }
    if (!recordLabel) throw 'You must provide a record label for your band';
    if (typeof(recordLabel)!='string') throw 'The record label should be of type: String';
    if (bandMembers.length <= 0) throw 'You must provide at least one band member';
    
    if (genres.length <= 0) throw 'You must provide at least one genre';

    const bandCollection = await bands();

    let newBand = {
      bandName: bandName,
      bandMembers: bandMembers,
      yearFormed : yearFormed,
      genres : genres,
      recordLabel: recordLabel,
      albums:[]
     // _id: uuid.v4()
    };

    const insertInfo = await bandCollection.insertOne(newBand);
    if (insertInfo.insertedCount === 0) throw 'Could not add band';

    const newId = insertInfo.insertedId;
    newIdString=newId.toString();
   // console.log(newIdString);
    const band = await this.getBand(newIdString);
    return band;
}
async function getAllBands(){
    const bandCollection = await bands();

    const allBands = await bandCollection.find({}).toArray();
    

    return allBands;
}
/*
async function byNewMethod(){
  const bandCollection = await bands();
  var newOnes= await this.getAllBands();
  console.log(newOnes.bandName.length);
  for (let i = 0; i < newOnes.length; i++) {
   for (let index = 0; index < newOnes[i].bandName.length; index++) {
  //  const newOnes = await bandCollection.find({_id:1}).toArray();
console.log("1"+newOnes[i].bandName);}}
//console.log(newOnes);
    return newOnes;
}
*/

async function getBand(id){
    if (!id) throw 'You must provide an id to search for';

    const bandCollection = await bands();
// console.log(""+id);
  const objId = ObjectId.createFromHexString(id);
  //console.log(""+objId);
    const bando = await bandCollection.findOne({_id: objId});
    if (bando === null) throw 'No band with that id';

    return bando;
}

async function updateBand(bandId,bandName, bandMembers, yearFormed, genres, recordLabel){
    if (!bandId) throw 'You must provide an id to search for';

    if (!bandName) throw 'You must provide a name for your band';
    if(typeof(bandName)!='string') throw 'Name of band should be of type: string';
    if (!bandMembers || !Array.isArray(bandMembers)) throw 'You must provide an array of band members';

    //if (bandMembers.length <= 0) throw 'You must provide at least one band member.';
    if (!yearFormed) throw 'You must provide the year your band was formed';
    if (typeof(yearFormed)!='number') throw 'Year should be of type:  number';
    if (!genres || !Array.isArray(genres)) throw 'You must provide an array of genres';
    if (!recordLabel) throw 'You must provide a record label for your band';
    if (typeof(recordLabel)!='string') throw 'The record label should be of type: String';
   // if (genres.length <= 0) throw 'You must provide at least one genre';

    const bandCollection = await bands();
    const updateBand = {
       // bandId: bandId,
       bandName: bandName,
        bandMembers: bandMembers,
        yearFormed: yearFormed,
        genres: genres,
        recordLabel: recordLabel
    };
  //  const { ObjectId } = require('mongodb');
   const objId = ObjectId.createFromHexString(bandId);
    const updatedInfo = await bandCollection.updateOne({_id: objId}, {$set: updateBand});
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not update band successfully';
    }

    return await this.getBand(bandId);
  }
    

async function removeBand(id){
    if (!id) throw 'You must provide an id to search for';

    const bandCollection = await bands();
    const bandToBeRemoved=await this.getBand(id);
    let removedBand={
      deleted: true,
      data: bandToBeRemoved
    }
   // const { ObjectId } = require('mongodb');
   const objId = ObjectId.createFromHexString(id);
    const deletionInfo = await bandCollection.removeOne({_id: objId});

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete band with id of ${id}`;
    }
    return removedBand;
}

async function addAlbumsToBands(bandId,albumId,){
  const bandCollection = await bands();
  //const albumCollection=await albums();
  const objId = ObjectId.createFromHexString(bandId);
 //const albId=ObjectId.createFromHexString(albumId);
  //const albumo = await album1.getAlbum(albId);
  const updateInfo = await bandCollection.updateOne({_id: objId}, {$addToSet: {albums: albumId}});
  if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

  return await this.getBand(bandId);
}

async function removeAlbumFromBand(bandId,albumId){
  const bandCollection = await bands();
  const objId = ObjectId.createFromHexString(bandId);
  console.log(objId);
  const albId=ObjectId.createFromHexString(albumId);
  console.log(albId+objId);
  const updateInfo = await bandCollection.updateOne({_id: objId}, {$pull: {albums: albumId.toString()}});
  if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Removal failed';
return;
  //return await this.getBand(bandId);
}

module.exports={addBand,getAllBands,getBand,updateBand,removeBand,addAlbumsToBands,removeAlbumFromBand}