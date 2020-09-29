const express = require("express");
const router = express.Router();
const data = require("../data");
const bandData = data.bands;

const { ObjectId } = require('mongodb');
//
//const albumData=data.albums;
//const mongoCollections = require('../config/mongoCollections');
//const albums = mongoCollections.albums;
const albumData=data.albums;
//
router.get('/:id', async (req, res) => {  
    try {   
       const band = await bandData.getBand(req.params.id);//call DB function to get band by ID
        
//
let aluminium=[];
const max=band.albums.length;
let i;
for(i=0;i<max;i++){
let one=band.albums[i];
aluminium[i]=await albumData.getAlbumer(one);
}
band.albums=aluminium;
res.json(band);

    } catch (e) {   
        res.status(404).json({ message: 'band not found' });  
    } 
});  
/*
router.get('/', async (req, res) => {  
    try {   
        const bandList = await bandData.getAllBands();//call DB function to get all bands here   
        let rightOne={};let id=[];
        //
       // id=  bandData.find({},{_id:1});
      res.json(bandList);
       
    } catch (e) {   
        res.status(500).send();  
    } 
});  
*/

router.get('/', async (req, res) => {  
  try {   
      const bandList = await bandData.getAllBands();//call DB function to get all bands here   
      let pluton=[];
  for(let b in bandList){
    let i;
   if(bandList[b].albums.length>0) { 
  //  console.log(bandList[b].albums)
      for(i=0;i<bandList[b].albums.length;i++){
        let beta=bandList[b].albums[i];
        pluton[i]=await albumData.getAlbumer(beta);
          }
          bandList[b].albums=pluton;
        }
        pluton=[];
  }
    res.json(bandList);
     
  } catch (e) {   
      res.status(500).send();  
  } 
});  

/*
router.post("/", async (req, res) => {
    // Not implemented
    res.status(501).send();
  });
*/


router.post('/', async (req, res) => {
    let bandInfo = req.body;
   try {
      const newBand = await bandData.addBand(bandInfo.bandName, bandInfo.bandMembers, bandInfo.yearFormed, bandInfo.genres, bandInfo.recordLabel);
    // res.json(newBand);
     res.status(200).json(newBand);
    } catch (e) {
      //res.sendStatus(500);
      res.status(400).json({error:e});
   }
  });
  
  router.put('/:id', async (req, res) => {
    let bandInfo = req.body;
    try {
      await bandData.getBand(req.params.id);
    } catch (e) {
      res.status(404).json({error: 'Band not found'});
      return;
    }
    try {
      const updatedBand = await bandData.updateBand(req.params.id, bandInfo.bandName, bandInfo.bandMembers, bandInfo.yearFormed, bandInfo.genres,bandInfo.recordLabel);
      res.json(updatedBand);
    } catch (e) {
      res.status(400).json({error:e});
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
     const remBand= await bandData.getBand(req.params.id);
    } catch (e) {
      res.status(404).json({error: 'Band not found'});
      return;
    }
  
    try {
      let del;
     const bandToBe= await bandData.getBand(req.params.id);
     const hey=bandToBe.albums.length;
     let newRem=[];
      if(bandToBe.albums.length>0) {
           for(del=0;del<bandToBe.albums.length;del++){
            let gamma= bandToBe.albums[del];
            console.log(gamma);
        const removeAlbumAssociated=await albumData.removeAlbum(gamma);
          newRem[del]=removeAlbumAssociated;
         }
         console.log(newRem);
        }
         
      const removedBand= await bandData.removeBand(req.params.id);
    //added now
      removedBand.data.albums=newRem;
      res.status(200).json(removedBand);
    } catch (e) {
      res.sendStatus(500);
    }
  });
  module.exports = router;