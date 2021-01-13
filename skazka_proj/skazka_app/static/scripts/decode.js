//Decode game -- match Cyrillic to Latin letters

const decodeArea = document.querySelector('.decodeArea');
// const userInput = document.createElement('textarea');
const decOutput = document.createElement('div');
const decBtn = document.createElement('button');
const output1 = document.createElement('div');
const timeCounter = document.createElement('div');
const minutesCounter = document.createElement('span');
const secondsCounter = document.createElement('span');
const decGame = {totalSeconds: 0, inter: {}};
const decWords = ['тв', 'бургер', 'суп', 'такси', 'балерина', 'радио', 'водка', 'баскетбол', 'студент', 'парк',
'водка', 'лифт', 'интернет', 'телефон', 'журналист']
let gameWord = "";

let arr1 = {а: 'a', б: 'b', д: 'd', е: 'e', ф: 'f', г: 'g', х: 'h', и: 'i', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o',
п: 'p', р: 'r', с: 's', т: 't', у: 'u', в: 'v', з: 'z'}

let arr2 = {a: 'а', b: 'б', d: 'д', e: 'е', f: 'ф', g: 'г', h: 'х', i: 'и', k: 'к', l: 'л', m: 'м', n: 'н', o: 'о',
p: 'п', r: 'р', s: 'с', t: 'т', u: 'у', v: 'в', z: 'з'}

//button and style
decBtn.textContent = 'Start';
decBtn.style.display = 'block';
decBtn.classList.add("gameButton")
// userInput.style.width = '600px';
// userInput.style.height = '50px'; 
// userInput.value = "Hello world"
output1.style.fontSize = '0.8em';
output1.style.backgroundColor = '#ddd';
output1.style.padding = '10px';
output1.style.marginTop = '12px';
timeCounter.style.display = 'none';


//add to HTML
timeCounter.append(minutesCounter);
timeCounter.append(document.createTextNode(':'));
timeCounter.append(secondsCounter);

decodeArea.append(timeCounter);  
decodeArea.append(decOutput);
// decodeArea.append(userInput);
decodeArea.append(decBtn);
decodeArea.append(output1);
window.addEventListener('DOMContentLoaded', init());


//Event listeners
decBtn.addEventListener('click', (e) => {
    decWords.sort();
    gameWord = decWords[0];
    let resp = gameWord;
     // let resp = makeOutput(userInput.value);
    decOutput.textContent = resp;
    console.log(resp);
    decBtn.style.display = 'none';
    decGame.inter = setInterval(setTimer, 1000);
    timeCounter.style.display = 'inline';
    makeOutput(gameWord);
    console.log(gameWord);
})

function makeOutput(val) {
    for (i=0; i < val.length; i++) {
        rusVal = val[i];
        engVal = arr1[rusVal];
        console.log(rusVal, engVal, "RUS")
    }
}

function init() {
    let valHtml = '';
    for (const conv in arr1){
        let objKey = conv
        let objVal = arr1[conv]
        // console.log(`${objKey} = ${objVal}  `);
        valHtml += `${objKey} = ${objVal}&nbsp;&nbsp;  `;
    }
    output1.innerHTML = valHtml;  
}

function setTimer() {
    decGame.totalSeconds++;
    secondsCounter.innerHTML = padNum(decGame.totalSeconds % 60);
    minutesCounter.innerHTML = padNum(Math.floor(decGame.totalSeconds / 60));
}

function padNum(val){
    let valString = val + "";
    if(valString.length < 2) {
        return "0" + valString
    } else {
        return valString;
    }
}

//given the cyrillic letters, type the English equivalent to decode the word