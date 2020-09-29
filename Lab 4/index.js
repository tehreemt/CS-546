const animals = require('./data/animals');
const connection = require('./mongoConnection');

async function main(){

    const createdAnimal1 = await animals.create("Sasha","Dog");
    console.log(createdAnimal1);
    const createdAnimal2 = await animals.create("Lucy", "Dog");
    const allMyAnimals = await animals.getAll();
    console.log(allMyAnimals);
    const createdAnimal3 = await animals.create("Duke", "Walrus");
    const blubBlub = await animals.get(createdAnimal3._id.toString());
    console.log(blubBlub);
    const renameSasha = await animals.rename(createdAnimal1._id.toString(), "Sashita");
    const newSasha=await animals.get(renameSasha._id.toString());
    console.log(newSasha);
    const removeLucy = await animals.remove(createdAnimal2._id.toString());
    const finalAnimals = await animals.getAll();
    console.log(finalAnimals);
    /*
    try{
    const noMatch = await animals.get("BADID");
    console.log(noMatch);
    }
    catch(e){
        throw "Wrong input for id!";
    }
    
   try{
       const x=await animals.create("Dog");
   }
   catch(e){
       throw "Parameters missing!";
   }
   */

    //const x=await animals.create("Dog",123);
   // const x=await animals.create("",'');
/*   
   try{
       console.log('tp');
    const x=await animals.get("5E4d686af6c9d90fe8655379");
    console.log(x);
}
catch(e){
    throw "Invalid id!";
}
    */


    const db = await connection();
    await db.serverConfig.close();
  
    //console.log('Done!');
}

main().catch((error) => {
    console.log(error);
  });