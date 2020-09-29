
//Final implementation of utilities.js
function deepEquality(obj1, obj2) {
    //isArray function reference is Developer Mozilla
    if(Array.isArray(obj1)|| Array.isArray(obj2)) throw "Array is not a valid input! Object expected!";
    //Reference Stack overflow
    if (typeof (obj1)=='number') throw  "Number is not a valid input! Object expected!";
    for (var i in obj1) {
            //Check property exists on both objects
            if (typeof (obj1)=='string' || typeof (obj2)=='string') throw "String is not a valid input! Object expected!";
            //Checking if the properties are same   
            if( obj1.hasOwnProperty(i) !== obj2.hasOwnProperty(i)) return false;
            switch (typeof (obj1[i])) {
            //Comparing objects
                    case 'object':
                    if (!deepEquality(obj1[i], obj2[i])) return false;
                    break;
                //Comparing if undefined
                case 'one':
                    if ( typeof (obj2[i]) == 'undefined') return false;
                    break;
                //Comparing if values are same
                default:
                    if (obj1[i] != obj2[i]) return false;
            }
        }
        //Reference Stack overflow
        //Checking the other object
        for (var i in obj2) {
            if (typeof (obj1[i]) == 'undefined' ) return false;
        }
        return true;
    }

let arr=[],newarr=[];
function uniqueElements(arr){
//Reference for finding if its an array: Developer Mozilla
if(Array.isArray(arr)) 
{
    let count=0;
    arr.sort();
    for(i=0;i<arr.length;i++){
        if(arr[i] ==arr[i+1]){
            count=count;
        }
        else count=count+1;
        //console.log(""+count);
    }
   return count; 
}
else throw "Input type is not an array!";

}

function countOfEachCharacterInString(str){
    if (typeof str!="string") throw "Not a string input!";
    else 
    arrayString=[];
    objString={};
    arrayString=str.split("");
    arrayString.sort();
    let key;let value;
   // console.log(arrayString);
    for(i=0;i<arrayString.length;i++){
       key= str.charAt(i);
       value=objString[key];
      // console.log(key);
      if (objString[key] = value) {
        objString[key]= value + 1 ;
      }
      else objString[key]= 1;   
    }
    //console.log(objString);
    Object.keys(objString);
    return objString;
    }

    



module.exports={deepEquality,uniqueElements,countOfEachCharacterInString}