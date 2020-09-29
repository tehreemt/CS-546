const express = require("express");
const router = express.Router();
const data = require("../data");
const albumData = data.albums;


router.get('/:id', async (req, res) => {  
    try {   
        const album = await albumData.getAlbum(req.params.id);//call DB function to get band by ID
        res.status(200).json(album);  
    } catch (e) {   
        res.status(404).json({ message: 'album not found' });  
    } 
});  

router.get('/', async (req, res) => {  
    try {   
        const albumList = await albumData.getAllAlbums();//call DB function to get all bands here   
        res.status(200).json(albumList);  
    } catch (e) {   
        res.status(500).send();  
    } 
});  


router.post("/", async (req, res) => {
    try{
    let albumInfo=req.body;
    const {title,author,songs}=albumInfo;
    const newAlbum=await albumData.addAlbum(title,author,songs);
    res.json(newAlbum);
    }catch(e){
        res.status(404).json({error:e});
    }
});


//Patch

router.patch('/:id', async (req, res) => {
    let albumInfo=req.body;
    try{
        await albumData.getAlbum(req.params.id);
    }
    catch(e){
        res.status(404).json({ error: 'Album not found' });
        return;
    }

    try{
        const {newTitle,newSongs}=albumInfo;
        //console.log("one"+req.params.id);
        const updatedAlbum = await albumData.updateAlbum(req.params.id, newTitle,newSongs);
		res.json(updatedAlbum);
       // const {title,author,songs}=albumInfo;
   // const newAlbum=await albumData.addAlbum(title,author,songs);
   // res.json(newAlbum);

    }catch(e){
        res.status(400).json({ error: 'Unable to update album' });
        return;
    }
});
    


//Deleting album
router.delete('/:id', async (req, res) => {
    let albumInfo=req.body;
    try{
        await albumData.getAlbum(req.params.id);

    }
    catch(e){
        res.status(404).json({ error: 'Album not found' });
        return;
    }

    try{
       const result= await albumData.removeAlbumDueToBand(req.params.id);
        res.json(result);
    }catch(e){
        res.status(400).json({ error: 'Unable to delete album' });
		return;
    }
});


    // Not implemented
  /*  try {
        const newAlbum = await albumData.addAlbum(albumInfo.title, albumInfo.author, albumInfo.songs);
       // res.json(newBand);
       res.status(200).json(newAlbum);
      } catch (e) {
        //res.sendStatus(500);
        res.status(400);
      }
    */
   // res.status(501).send();
  

  module.exports = router;