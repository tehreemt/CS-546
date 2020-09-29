const mongoCollections = require('../config/mongoCollections');
const albums = mongoCollections.albums;
const { ObjectId } = require('mongodb');
const band=require("../data/bands");
const bands=mongoCollections.bands;
//const uuid = require('uuid');
async function addAlbum(title,author,songs){
  if (!title) throw 'You must provide a title for your album';
  if(typeof(title)!='string') throw 'Title should be of valid string type';
  if (!author) throw 'You must provide an author';
  if(typeof(author)!='string') throw "Author should be of type string";
  if(!songs) throw "You must provide an array of songs or a song atleast!";
 // if (!songs||Array.isArray(songs)) throw 'You must provide an array of songs or a song atleast!';
 // for(let s=0;s<songs.length;s++){
 //   if(typeof(songs[s])!='string') throw 'Songs should be of type string';
 // }
  const albumCollection = await albums();
  
 const bandWithAlbum = await band.getBand(author); 
//console.log(""+author);
  let newAlbum = {
    title: title,author: author ,songs:songs
  };

  const insertInfo = await albumCollection.insertOne(newAlbum);
  if (insertInfo.insertedCount === 0) throw 'Could not add album';

  const newId = insertInfo.insertedId;
  newIdString=newId.toString();
  await band.addAlbumsToBands(author,newIdString);
 // await band.addAlbumsToBands(author,id,)
 // console.log(newIdString);
  const album = await this.getAlbum(newIdString);
  return album;
}
async function getAlbum(id){
  if (!id) throw 'You must provide an id to search for';

  const albumCollection = await albums();
// 
 const objId = ObjectId.createFromHexString(id);
 
  const albumo = await albumCollection.findOne({_id: objId});
  //
  const bandCollection = await bands();
  
  const temp= await bandCollection.findOne({_id: ObjectId.createFromHexString(albumo.author)});
 // console.log(temp.bandName);
 albumo.author={_id:`${temp._id}`,bandName:`${temp.bandName}`};
  if (albumo === null) throw 'No album with that id';
//console.log(albumo);
  return albumo;
}

async function getAlbumer(id){
  if (!id) throw 'You must provide an id to search for';

  const albumCollection = await albums();
// 
 const objId = ObjectId.createFromHexString(id);
 
  const albumo = await albumCollection.findOne({_id: objId});
  //

  if (albumo === null) throw 'No album with that id';
  //console.log(albumo);
    return albumo;
  }
async function getAllAlbums() {
  const albumCollection = await albums();

  const allAlbums = await albumCollection.find({}).toArray();
  //
  let myNewAlbum=[];
  const bandCollection = await bands();
  for(let a in allAlbums){
    let i;
     for(i=0;i<allAlbums[a].author.length;i++){
        let alpha=allAlbums[a].author;
     
  const temp= await bandCollection.findOne({_id: ObjectId.createFromHexString(alpha)});
  allAlbums[a].author={_id:`${temp._id}`,bandName:`${temp.bandName}`};
      
        }}
      //  myNewAlbum=[];}

  return allAlbums;
}

async function updateAlbum(albumId,newTitle,newSongs){
  const albumCollection = await albums();
  const updatedAlbumData={};
  //console.log(albumId);
  if(newTitle){
    if(typeof(newTitle)!='string') throw 'Title should be of valid string type';
    updatedAlbumData.title=newTitle;
    const objId = ObjectId.createFromHexString(albumId);
  //console.log.log(objId);
  await albumCollection.updateOne({_id: objId},{$set:{title:updatedAlbumData.title}});
  }
  if(newSongs){
    updatedAlbumData.songs=newSongs;
    const objId = ObjectId.createFromHexString(albumId);
  //console.log.log(objId);
  await albumCollection.updateOne({_id: objId},{$push:{songs:updatedAlbumData.songs}});
  }
 //const newId = insertInfo.insertedId;
 // newIdString=albumId.toString();
 const objId = ObjectId.createFromHexString(albumId);
  //console.log.log(objId);
 // await albumCollection.updateOne({_id: objId},{$push: updatedAlbumData});
    //{$set:{title:updatedAlbumData.title}},{$push:{songs:updatedAlbumData.songs}});
 // console.log(newIdString);
  return await this.getAlbum(albumId);

}


async function removeAlbumDueToBand(id){
  if (!id) throw 'You must provide an id to search for';

  const albumCollection = await albums();
  console.log("one");
  const objId = ObjectId.createFromHexString(id);
  const albumToBeRemoved= await this.getAlbum(id);
  let removedAlbum={
    deleted: true,
    data: albumToBeRemoved
  }
 // const band1=await bands();
  //console.log("one");
 //console.log(albumToBeRemoved);
  const deletionInfo = await albumCollection.removeOne({_id: objId});
  if (deletionInfo.deletedCount === 0) {
    throw `Could not delete album with id of ${id}`;
  }
 newIdString=id.toString();
  let deer=albumToBeRemoved.author._id;
 // console.log(deer+albumToBeRemoved.author._id);
 //const bandWithAlbum = await band.getBand(id); 
 const see=await band.removeAlbumFromBand(deer,newIdString);
  console.log("here"+see)
  return removedAlbum;
}

async function removeAlbum(id){
  if (!id) throw 'You must provide an id to search for';

  const albumCollection = await albums();
  console.log("one");
  const objId = ObjectId.createFromHexString(id);
  const removedAl= await this.getAlbumer(id);
  const deletionInfo = await albumCollection.removeOne({_id: objId});
  if (deletionInfo.deletedCount === 0) {
    throw `Could not delete album with id of ${id}`;
  }
 // let result={
 //   _id:removedAl._id,
 //   title:removedAl.title,
//    author:
//  }
  return removedAl;
}

module.exports={addAlbum,getAlbum,getAllAlbums,updateAlbum,removeAlbumDueToBand,getAlbumer,removeAlbum}
