
let arr=[];
const questionOne = function questionOne(arr) {
    // Implement question 1 here
//I implemented question Three before question One, so now I know, thanks to W3 schools website how length of Array is calculated!
let i,totalSum=0,totalNumbers=0;
for(i=0;i<arr.length;i++)
{
	if(typeOf arr[i]==='number')
	{
		totalNumbers=totalNumbers+1;
	}
	
}

if(totalNumbers==arr.length)

{

	for(i=0;i<arr.length;i++)
	{
		totalSum=totalSum+arr[i]*arr[i];
	}
return totalSum;

}
else
{
return "Invalid numbers";
}
}


//Implemented this question number one but need to work on Exception Handling
//Testing for question One:
console.log(questionOne([5,3,10,2,0,1]));
console.log(questionOne([2,1,2]));
Should throw exception console.log(questionOne([abs,12]));


let index,result;
const questionTwo = function questionTwo(index) { 
    // Implement question 2 here
	if(index<=0)
	{
		return 0;	
	}
	if(index==1)
	{
		return 1;	
	}
	else
	{
		let i;
		for(i=index; i>1; i--)
		{
			result=questionTwo(index-1)+questionTwo(index-2);
			return result;
		}
	}
}

/*
Successfully implemented question Two! Reference was from website Wikipedia(just made sure about the way Fibonacci is calculated)
//Testing question two
console.log("Fibonacci of 0 is:"+questionTwo(0));
console.log("Fibonacci of 1 is:"+questionTwo(1));
console.log("Fibonacci of 4 is:"+questionTwo(4));
console.log("Fibonacci of 11 is:"+questionTwo(11));
console.log("Fibonacci of -50 is:"+questionTwo(-50));
*/


let str;
const questionThree = function questionThree(str) {
    // Implement question 3 here
let totalVowel=0;
let length=str.length;
//For the str.length usage, I referred W3 schools website. I was earlier making a mistake by str.length() instead of str.length
let arrayOfString=str.split("");

for(i=0;i<length;i++)
	{
		if(arrayOfString[i]=='a' || arrayOfString[i]=='e' || arrayOfString[i]=='i' ||arrayOfString[i]=='o' ||arrayOfString[i]=='u')
		{
			totalVowel=totalVowel+1;
		}	
	}
return totalVowel;
	
}
/*
Successfully implemented question Three! Got to learn how the syntax for length of string is different!
//I first tested this putting only condition on 'a' as a vowel, since it runs successfully, i will add 'e','i','o','u'
console.log("Total a is:"+questionThree("Maya"));
console.log("Total a is:"+questionThree("Sequel of"));
console.log("Total a is:"+questionThree("Tiguana"));
console.log("Total a is:"+questionThree("Cwtch"));
console.log("Total a is:"+questionThree("1259"));
console.log("Total a is:"+questionThree("Super Robot 25"));
*/


let num=1;
const questionFour = function questionFour(num) {
    // Implement question 4 here
	if(num==0)
	{
		return 1;
	}
	if(num<0)
	{
		return NaN;
	}
	else
	{
		let i=1;
		let fact=1;
		for(i=num;i>0;i--)
		{
			fact=i*fact;
		}
		return fact;
	}

}




//Implemented but have to test for exception handling
//Testing question four
console.log(questionFour(5));
console.log(questionFour(0));
console.log(questionFour(-10));
console.log(questionFour("3"));
//Should Throw exception console.log(questionFour("abc"));

/*
module.exports = {
    firstName: "YOUR FIRST NAME", 
    lastName: "YOUR LAST NAME", 
    studentId: "YOUR STUDENT ID",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
*/