const bluebird = require("bluebird");
//const Promise = bluebird.Promise;

const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path){

    if (!path) throw "You must provide a path";
    if(typeof path != 'string') throw "Path of file is not of type 'String'!";
try{
    const str=await fs.readFileAsync(path,'utf-8');
   // let string1=JSON.stringify(str);
    return str;
}
catch(err){
   // console.log("Oops! "+err);
   throw "Error reading file!";
}
}



async function getFileAsJSON(path){
    if(!path) throw "You must provide a valid path!";
    if(typeof path!='string') throw "Path not of type 'String'!";
    try{
    const str1=await fs.readFileAsync(path,'utf-8');
    if(str1=='undefined') throw "Error: Undefined!"
    if(!str1) throw "Not a valid string!";
    const myObj=JSON.parse(str1);
    return myObj;     
    }
    catch(err){
       // console.log("Oops! For getFileAsJSON, we have an error! ");
       throw "Oops! For getFileAsJSON, we have an error! ";
    }
}

    


async function saveStringToFile(path, text){
    if(!path) throw "You must provide a valid path!";
    if(typeof path!='string') throw "Path not of type 'String'!";
    if(!text) throw "Text does not exist!";
    if(typeof text!='string') throw "Text not of type 'String'!";
    //const str2=await fs.readFileAsync(path,'utf-8');
    try{
    return await fs.writeFileAsync(path,text);
    }
catch(err){
   // console.log("Oops! Error in saveStringToFile: "+err);
    throw "Oops! Error in saveStringToFile: cannot write text to file!";
}
}
async function saveJSONToFile(path, obj){
    if(!path) throw "You must provide a valid path!";
    if(typeof path!='string') throw "You must provide a valid path!";
    if(!obj) throw "As no object is provided!";
    if(typeof obj!='object') throw "The contents are not of type: Object";
    try{
    const newContent=JSON.stringify(obj);
    const saver=await fs.writeFileAsync(path,newContent);
    return saver;
    }
    catch(err){
       // console.log("Oops! Error in saveJSONToFile:  "+err);
       throw "Oops! Error in saveJSONToFile: Operation could not be performed!";
    }
}

module.exports={getFileAsString,getFileAsJSON,saveStringToFile,saveJSONToFile};