//Decode game -- match Cyrillic to Latin letters

const decodeArea = document.querySelector('.decodeArea');
const userInput = document.createElement('textarea');
const decOutput = document.createElement('div');
const decBtn = document.createElement('button');

//button
decBtn.textContent = 'Create Secret Code';
decBtn.style.display = 'block';
userInput.style.width = '600px';
userInput.style.height = '50px'; 

//add to HTML
decodeArea.append(decOutput);
decodeArea.append(userInput);
decodeArea.append(decBtn);

//Event listeners
decBtn.addEventListener('click', (e) => {
    console.log(userInput.value);


})

//Methods
function makeOutput()