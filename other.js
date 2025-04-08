const textInput = document.getElementById('textInput');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

function pelindrom(str){
    const alphaNumeric = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return alphaNumeric === alphaNumeric.split('').reverse().join('');
}

checkButton.addEventListener('click', () => {
    const majorElement = textInput.value.trim();

    if(pelindrom(majorElement)){
        result.textContent = 'It is a pelindrom';
        result.style.color = 'green';
    }else{
        result.textContent = 'It is not a pelindrom';
        result.style.color = 'red';
    }
})