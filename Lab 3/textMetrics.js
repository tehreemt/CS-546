async function createMetrics(text){
    if(typeof text!='string') throw "Invalid input! String was expected!";
    if(!text) throw "Invalid input! File does not contain a valid string!";
    try{
    let totalLetters=0;
    let totalNonLetters=0,totalWords=0;
    let totalVowels=0,totalConsonants=0;
    let uniqueWords=0,averageWordLength=0,longWords=0;
    let obj1={};
    let newtext=text.toLowerCase();
    
    
    for(i=0;i<newtext.length;i++){
        if(newtext[i]=='a'||newtext[i]=='b'||newtext[i]=='c'||newtext[i]=='d'||newtext[i]=='e'||newtext[i]=='f'||newtext[i]=='g'||newtext[i]=='h'||newtext[i]=='i'||newtext[i]=='j'||newtext[i]=='k'||newtext[i]=='l'||newtext[i]=='m'||newtext[i]=='n'||newtext[i]=='o'||newtext[i]=='p'||newtext[i]=='q'||newtext[i]=='r'||newtext[i]=='s'||newtext[i]=='t'||newtext[i]=='u'||newtext[i]=='v'||newtext[i]=='w'||newtext[i]=='x'||newtext[i]=='y'||newtext[i]=='z')
        totalLetters=totalLetters+1;
        else
        totalNonLetters=totalNonLetters+1;
    }
   
   for(i=0;i<newtext.length;i++){
       if(newtext[i]=='a'||newtext[i]=='e'||newtext[i]=='i'||newtext[i]=='o'||newtext[i]=='u')
        totalVowels=totalVowels+1;
       if(newtext[i]=='b'||newtext[i]=='c'||newtext[i]=='c'||newtext[i]=='d'||newtext[i]=='f'||newtext[i]=='g'||newtext[i]=='h'||newtext[i]=='j'||newtext[i]=='k'||newtext[i]=='l'||newtext[i]=='m'||newtext[i]=='n'||newtext[i]=='p'||newtext[i]=='q'||newtext[i]=='r'||newtext[i]=='s'||newtext[i]=='t'||newtext[i]=='v'||newtext[i]=='w'||newtext[i]=='x'||newtext[i]=='y'||newtext[i]=='z')
        totalConsonants=totalConsonants+1;
    }

   let words=[];
  /* newtext=newtext.replace('-', " ");
   //Replaced hyphen by space, as it wasnt counting hyphenated words as two words
   newtext=newtext.replace(':'," ");
   newtext=newtext.replace(';'," ");
   newtext=newtext.replace(','," ");
   words=newtext.split(' ');
   */
  newtext=newtext.replace(/[^a-z]+/g," ");//Developer mozilla
  //Replaced all other characters apart from alphabets by space
  //the'/g' stands for global search -source Developer mozilla
  newtext=newtext.trim();
  //trim() removes spaces from both sides of string otherwise a space will be counted as a word
  words=newtext.split(" ");

  //totalWords=words.length;
  //console.log(newtext);
 
 //console.log(words);
    for(i=0;i<words.length;i++){
        let word=words[i];
        if(/[a-z]/.test(word))
        totalWords=totalWords+1;
    }
//console.log(totalWords);
let sum=0;
  //Check average length of words:
  for(w=0;w<words.length;w++){
    sum=words[w].length+sum;
  }
  averageWordLength=sum/words.length;
 // console.log(averageWordLength);
//Check for unique words:
words.sort();


//Sorting words so that they can be compared consecutively
    for(w=0;w<words.length;w++){
        if(words[w]==words[w+1]){
            uniqueWords=uniqueWords;
        }
        else uniqueWords=uniqueWords+1;
    }
  //  console.log(uniqueWords);


 //Checking the long words:
 for(w=0;w<words.length;w++){
     if(words[w].length>5){
         longWords=longWords+1;
     }
 }
 //console.log(longWords);
 //Checking word occurences:
 let key;let value;
 let wordOccurrences={};
    for(i=0;i<words.length;i++){
       key= words[i];
       value=wordOccurrences[key];
      // console.log(key);
      if (wordOccurrences[key] = value) {
        wordOccurrences[key]= value + 1 ;
      }
      else wordOccurrences[key]= 1;   
    }
  //  console.log(wordOccurences);

//Final task to return everything as object:
obj1["totalLetters"]=totalLetters;
obj1["totalNonLetters"]=totalNonLetters;
obj1["totalWords"]=totalWords;
obj1["totalVowels"]=totalVowels;
obj1["totalConsonants"]=totalConsonants;
obj1["uniqueWords"]=uniqueWords;
obj1["longWords"]=longWords;
obj1["averageWordLength"]=averageWordLength;
obj1["wordOccurrences"]=wordOccurrences;
//console.log(obj1);
return obj1;
    }
    catch(er){
       // console.log(""+er);
       throw "Error doing metrics on file!";
    }
}



module.exports={createMetrics};