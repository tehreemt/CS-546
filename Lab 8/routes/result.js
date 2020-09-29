const express = require('express');
const router = express.Router();
router.get('/', async (req, res) => {
    res.render('posts/index', { title: "The Best Palindrome Checker in the World!" });
});

router.post('/result', async (req, res) => {
    let palindromeData = req.body['text-to-test'];
    if (palindromeData === "" || palindromeData == undefined) {
  console.log(palindromeData);
  res.render('posts/error', { title: "error", hasErrors:true, error: "Please enter a valid string to check!"});
  
  return;
    }
    try {
        const resultPalindrome = await palindrome(palindromeData);
      //  console.log(resultPalindrome);
        res.render('posts/result', { title: "The Palindrome Results!", result :resultPalindrome, text1:palindromeData});
    } catch (e) {
      res.render('posts/error', { title: "error", hasErrors:true, error:e});
    }
});


//
async function palindrome(str) {
    //Reference for regular expression: W3 schools
   let lowercaseStr=str.toLowerCase().replace(/[\W_]/g,"");
     if(str==undefined) console.log("err");
   // let lowercaseStr = str.toLowerCase().replace(/[^A-Za-z0–9]+/g, '');
    if (lowercaseStr===""){
        console.log("nooo");
        return;
    }
      let reverseStr = lowercaseStr.split('').reverse().join(''); 
    if(reverseStr==lowercaseStr) {
    console.log("Palindrome");
    return true;
   // return "It is a Palindrome!";
    //  return reverseStr === lowercaseStr;
    }
    else console.log("no");
    return false;
   // return "It is not a Palindrome";
    }
    /*
    palindrome("i am good");
    palindrome("Madam");
    palindrome("Was it a cat I saw?");
    palindrome("He did, eh?");
    palindrome("Go hang a salami, I’m a lasagna hog.");
    palindrome("Poor Dan is in a droop");
    palindrome("Taco cat? Taco cat.");
    palindrome("}");
    palindrome("poor11roop");
    palindrome("''");
    palindrome("{{}}");
*/

module.exports = router;