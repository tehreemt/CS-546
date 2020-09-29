const bluebird = require("bluebird");
//const Promise = bluebird.Promise;
const fileData=require("./fileData");
const textMetrics=require("./textMetrics.js")

//const prompt = bluebird.promisifyAll(require("prompt"));
const fs = bluebird.promisifyAll(require("fs"));

async function main(file){
    try{
    if(file==null) throw "File path cannot be null!";
    if(typeof(file)!='string')throw "Invalid input for file name! File name should be string!";
    if(fs.existsSync(file)==false) throw "File does not exist!"; 
    let checkExistance=file.split('.');
    newName=checkExistance[1];
    //const luffy=await fileData.getFileAsString(file);
    
    //Do not put apostrophe and $ sign, it is a weird symbol resembling apostrophe `
    if(fs.existsSync(`.${newName}.result.json`)){
        const jsonFile=await fileData.getFileAsJSON(`.${newName}.result.json`);//('./hello.result.json');
        const stringFile=await fileData.getFileAsString(file);
        const storeLuffy=await fileData.saveStringToFile(`.${newName}.string.txt`,stringFile);
        console.log(jsonFile);//Get the file as JSON and print the results    
        return jsonFile;
    }
    else {
        const stringFile=await fileData.getFileAsString(file);
        const storeLuffy=await fileData.saveStringToFile(`.${newName}.string.txt`,stringFile);
        const result=await textMetrics.createMetrics(stringFile);
        //console.log("Executed"+result);
        const storeResult=await fileData.saveJSONToFile(`./${newName}.result.json`,result);
        //const storeString=await fileData.saveStringToFile(`./${newName}.string.txt`,JSON.stringify(result));
        //the character "./" before ${newname} is very important, otherwise file wont be created    
        return storeResult;
       
    } }
catch(ery){
    console.log(""+ery);
   // throw "Error in performing metrics on file specified!";
}
}

//main();
//main(123);
//main('./hello.txt');
//main(',');
//main({});
main('./chapter1.txt');
main('./chapter2.txt');
main('./chapter3.txt');
//main('./blankFile.txt');

//console.log(fileData.getFileAsString('./hello.txt'));
//Successfully implemeted getFileAsString
//console.log(fileData.getFileAsJSON('./hello.txt'));
//fileData.saveStringToFile('./hello.txt','Tehreem');

//saveStringToFile implemented successfully, got to check for errors
//Have to ask on slack if the original contents of the file are to be erased/replaced by new text or just new text appended
//fileData.saveStringToFile('./hello.txt','This is new content added!');
//fileData.saveJSONToFile('./hello.txt',{'Cat Burglar':"Nami"});
//Successfully implemented saveJSONToFile
//textMetrics.createMetrics("Anbhuji12 bhu;itwo! he-y the,are i'm itwo");
//console.log(textMetrics.createMetrics("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23"));
/*
try{
textMetrics.createMetrics(123);
}
catch(err){
    console.log(err);
}
try{
    textMetrics.createMetrics('');
}
catch(err){
    console.log(err);
}
try{
    textMetrics.createMetrics('Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23');
}
catch(err){
    console.log(err);
}
*/