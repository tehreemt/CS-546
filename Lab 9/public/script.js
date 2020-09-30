let myForm = document.getElementById('myForm');
let textInput = document.getElementById('text_input');
let errorDiv = document.getElementById('error');
let myUl = document.getElementById('attempts');
let successDiv=document.getElementById('success');
if (myForm) {
	myForm.addEventListener('submit', (event) => {
		event.preventDefault();
		if (textInput.value) {
            errorDiv.hidden = true;
           let result= palindrome(textInput.value);
           let li = document.createElement("li");
           if(result){
            li.innerHTML = textInput.value;
            li.className='is-palindrome';
			myUl.appendChild(li);
			myForm.reset();
            textInput.focus();
           }
           else{
            li.innerHTML = textInput.value;
            li.className='not-palindrome';
			myUl.appendChild(li);
			myForm.reset();
            textInput.focus();
           }

		} else {
			errorDiv.hidden = false;
			errorDiv.innerHTML = 'You Must Enter a phrase!';
			textInput.focus();
		}
	});
}

function palindrome(str) {
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