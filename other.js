const textInput = document.querySelector("#textInput");
const checkBtn = document.querySelector("#checkButton");
const result = document.querySelector("#result");

function upsPalindrome(str){
  const textStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase('');
  return textStr === textStr.split('').reverse().join('');
}

checkBtn.addEventListener('click', () => {
const inputText = textInput.value.trim();

if(inputText===''){
  result.textContent = 'Add Text'
  result.style.color = 'red';
  return;
}

const myFunction = upsPalindrome(inputText)

if(myFunction){
  result.textContent = 'Palindrome'
  result.style.color = 'green';
}else{
   result.textContent = 'Not palindrome'
  result.style.color = 'red';
}
})