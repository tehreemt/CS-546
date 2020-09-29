//Final implementation of index.js
const geometry=require('./geometry');
const util=require('./utilities');
//Test1: Surface area of rectangular prism: good input
try{
    console.log(geometry.surfaceAreaOfRectangularPrism(1,2,3));
}
catch(err){
    console.log(""+err);
}
//Test2: testing surface area of rectangular prism for invalid Height
try{
    console.log(geometry.surfaceAreaOfRectangularPrism(1,2));
}
catch(err){
    console.log(""+err);
}
//Test 3: testing surface area of rectangular prism for invalid Width
try{
    console.log(geometry.surfaceAreaOfRectangularPrism(1,'hi',3));
}
catch(err){
    console.log(""+err);
}
//Test 4: testing surface area of rectangular prism for invalid Length: array
try{
    console.log(geometry.surfaceAreaOfRectangularPrism([2],1,3));
}
catch(err){
    console.log(""+err);
}
//Test 5: testing surface area of rectangular prism for invalid Width: object
try{
    console.log(geometry.surfaceAreaOfRectangularPrism(1,{1:'hi'},3));
}
catch(err){
    console.log(""+err);
}
//Test 1: Volume of Rectangular Prism: Good input
try{
    console.log(geometry.volumeOfRectangularPrism(1,2,2));
}
catch(err){
    console.log(""+err);
}
//Test 2: Volume of Rectangular Prism: testing volume for invalid width 
try{
    console.log(geometry.volumeOfRectangularPrism(1,'nk',3));
}
catch(err){
    console.log(""+err);
}
//Test 3: For volume of rect Prism: no input
try{
    console.log(geometry.volumeOfRectangularPrism());
}
catch(err){
    console.log(""+err);
}
//Test 4: Volume of rect prism: array input
try{
    console.log(geometry.volumeOfRectangularPrism(1,2,[3]));
}
catch(err){
    console.log(""+err);
}
//Test 5: Object passed instead of number Volume of rect prism
try{
    console.log(geometry.volumeOfRectangularPrism(2,{z:1},5));
}
catch(err){
    console.log(""+err);
}
// Test 1: Volume of sphere-good input
try{
    console.log(geometry.volumeOfSphere(6));
}
catch(err){
    console.log(""+err);
}
//Test 2: Volume of sphere for radius 0 throws exception
try{
    console.log(geometry.volumeOfSphere(0));
}
catch(err){
    console.log(""+err);
}
//Test 3: Volume of sphere for string radius
try{
    console.log(geometry.volumeOfSphere('La La Land'));
}
catch(err){
    console.log(""+err);
} 
//Test 4: Volume of sphere for object radius
try{
    console.log(geometry.volumeOfSphere({12:"b"}));
}
catch(err){
    console.log(""+err);
} 
//Test 5: Volume of sphere for array radius
try{
    console.log(geometry.volumeOfSphere([2]));
}
catch(err){
    console.log(""+err);
} 
//Test 1: Good input for Surface area of sphere
try{
    console.log(geometry.surfaceAreaOfSphere(6));
}
catch(err){
    console.log(""+err);
}
//Test 2: Surface area bad input string
try{
    console.log(geometry.surfaceAreaOfSphere("25quj"));
}
catch(err){
    console.log(""+err);
}
//Test 3: Surface area bad input array
try{
    console.log(geometry.surfaceAreaOfSphere([2]));
}
catch(err){
    console.log(""+err);
}
//Test 4: Surface area bad input object
try{
    console.log(geometry.surfaceAreaOfSphere({1:"m"}));
}
catch(err){
    console.log(""+err);
}
//Test 5: Surface area bad input no input
try{
    console.log(geometry.surfaceAreaOfSphere());
}
catch(err){
    console.log(""+err);
}
// Tested all geometry.js functions successfully
const one={a:1,b:2,c:5};
const two={a:5,b:10,g:6,s:2};
const three={a:1,b:5,d:2};
const four={a:5,b:1,c:2};
const five={a:1,b:2,c:5};
//console.log("Output for deepEquality");
//Test 1: deep equality two unequal objects : size does not match returns false
try{
    console.log(util.deepEquality(one,two));
}
catch(err){
    console.log(""+err);
} 
//Test 2: deepEquality should return false as objects are unequal
try{
    console.log(util.deepEquality(one,three));
}
catch(err){
    console.log(""+err);
} 
//Test 3: deepEquality unequal objects 
try{
    console.log(util.deepEquality(one,four));
}
catch(err){
    console.log(""+err);
} 
//Test 4:Same objects are passed, should return true:
try{
    console.log(util.deepEquality(one,one));
}
catch(err){
    console.log(""+err);
} 
// extra testing for unequal objects
/*
try{
    console.log(util.deepEquality(one,five));
}
catch(err){
    console.log(""+err);
} 
*/
const six={a:1,b:3,c:{x:26,y:29,z:15,56:"a"}};
const seven={a:1,c:{x:26,y:29,z:15,56:"a"},b:3};
// Test 5: testing objects are unequal on a deeper level
try{
    console.log(util.deepEquality(six,seven));
}
catch(err){
    console.log(""+err);
} 
//Test 6: Extra test passing number as input for deepEquality
const nami=1;
try{
    console.log(util.deepEquality(1,nami));
}
catch(err){
    console.log(""+err);
} 
//Test 7:Extra Passing string as input for deepEquality
try{
    console.log(util.deepEquality("hi","hi"));
}
catch(err){
    console.log(""+err);
} 
//Test 8:  Passing two arrays as input: throw
try{
    console.log(util.deepEquality([1],[1]));
}
catch(err){
    console.log(""+err);
} 
//Test 9: Extra testing deepequality Nested objects which are unequal , tested for deepEquality; deepEquality successfully implemented
try{
    console.log(util.deepEquality({a:1,c:{x:26,y:29,z:95,56:"a"},b:3},{a:1,c:{x:26,y:29,z:15,56:"a"},b:3}));
}
catch(err){
    console.log(""+err);
} 
//console.log("question No 2 unique elements:");
//Test 1: Testing for numbers in question two, uniqueElements, array is expected
try{
    console.log(util.uniqueElements(nami));
}
catch(err){
    console.log(""+err);
} 
// Test 2: Passing an array, should return 4 elements: Implemented
try{
    console.log(util.uniqueElements([1,1,2,5,9,9,5]));
}
catch(err){
    console.log(""+err);
} 
//Test 3: Passing an array, returns 7: Implemented
try{
    console.log(util.uniqueElements([100,1,2,35,90,9,5]));
}
catch(err){
    console.log(""+err);
} 
//Test 4: String array should return 3, implemented
const testArr = ["a", "a", "b", "a", "b", "c"];

try{
    console.log(util.uniqueElements(testArr));
}
catch(err){
    console.log(""+err);
} 
// Test 5: Object passed instead of array for unique elements should throw exception
try{
    console.log(util.uniqueElements({1:"g"},{1:"g"}));
}
catch(err){
    console.log(""+err);
} 

//console.log("question No 3 Count of each character in string:");
//Test 1: Good input Count of each string
try{
    console.log(util.countOfEachCharacterInString("naaaami and Zoro"));
}
catch(err){
    console.log(""+err);
} 
// Test 2: Should throw exception when number is entered
try{
    console.log(util.countOfEachCharacterInString(152));
}
catch(err){
    console.log(""+err);
} 
// Test 3: Good input 
const test = "Hello, the pie is in the oven";
try{
    console.log(util.countOfEachCharacterInString(test));
}
catch(err){
    console.log(""+err);
} 
// Test 4: Array as an input should throw
try{
    console.log(util.countOfEachCharacterInString(["Hey there, how are you? Please throw exception!"]));
}
catch(err){
    console.log(""+err);
} 
// Test 5: Good input
try{
    console.log(util.countOfEachCharacterInString("Thank You for your time! Program implemented successfully!"));
}
catch(err){
    console.log(""+err);
} 