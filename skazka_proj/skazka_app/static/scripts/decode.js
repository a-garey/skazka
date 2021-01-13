//Decode game -- match Cyrillic to Latin letters

const decodeArea = document.querySelector('.decodeArea');
const userInput = document.createElement('textarea');
const decOutput = document.createElement('div');
const decBtn = document.createElement('button');
const output1 = document.createElement('div');
const newVal = [];

let arr1 = [{id: '1', name: 'a'}, {id: '2', name: 'b'}, {id: '3', name: 'c'},
{id: '4', name: 'd'}, {id: '5', name: 'e'}, {id: '6', name: 'f'}, {id: '7', name: 'g'},
{id: '8', name: 'h'}, {id: '9', name: 'i'}, {id: '10', name: 'j'}, {id: '11', name: 'k'},
{id: '12', name: 'l'}, {id: '13', name: 'm'}, {id: '14', name: 'n'}, {id: '15', name: 'o'},
{id: '16', name: 'p'}, {id: '17', name: 'q'}, {id: '18', name: 'r'}, {id: '19', name: 's'}, 
{id: '20', name: 't'}, {id: '21', name: 'u'}, {id: '22', name: 'v'}, {id: '23', name: 'w'},
{id: '24', name: 'x'}, {id: '25', name: 'y'}, {id: '26', name: 'z'} ]

let arr2 = [{id: '1', name: 'а'}, {id: '2', name: 'б'}, 
{id: '4', name: 'д'}, {id: '5', name: 'е'}, {id: '6', name: 'ф'}, {id: '7', name: 'г'},
{id: '8', name: 'х'}, {id: '9', name: 'и'}, {id: '11', name: 'к'},
{id: '12', name: 'л'}, {id: '13', name: 'м'}, {id: '14', name: 'н'}, {id: '15', name: 'о'},
{id: '16', name: 'п'}, {id: '18', name: 'р'}, {id: '19', name: 'с'}, 
{id: '20', name: 'т'}, {id: '21', name: 'у'}, {id: '22', name: 'в'}, {id: '26', name: 'з'} ]

//button and style
decBtn.textContent = 'Create Secret Code';
decBtn.style.display = 'block';
userInput.style.width = '600px';
userInput.style.height = '50px'; 
userInput.value = "Hello world"
output1.style.fontSize = '0.6em';
output1.style.backgroundColor = '#ddd';
output1.style.padding = '10px';
output1.style.marginTop = '12px';


//add to HTML
decodeArea.append(decOutput);
decodeArea.append(userInput);
decodeArea.append(decBtn);
decodeArea.append(output1);
window.addEventListener('DOMContentLoaded', init());

//Event listeners
decBtn.addEventListener('click', (e) => {
    let resp = makeOutput(userInput.value);
    decOutput.textContent = resp;
    console.log(resp);


})

//Methods
// function makeOutput(val) {
//     let holder = [];
//     for(let i = 0; i < val.length; i++) {
//         let charVal = val.charAt(i);
//         let coded =  charVal.toLowerCase().charCodeAt(0) - 96;
//         // console.log(coded);
//         holder.push(coded);
//     }
//     let cyrTemp = holder.join('-');
//     let temp1 = cyrTemp.replace(/--64-/g, ' ');
//     console.log(temp1);
//     return temp1;
// }

// function makeOutput(arr1, arr2) {
//     // let cyrTemp = val.split('');
    // let temp1 = cyrTemp.map((ltr) =>{
    //     return ltr.toLowerCase().charCodeAt(0) - 96;
    // });
    // console.log(temp1, "TEMP 1");
    // let temp2 = temp1.join('-');
    // let temp3 = temp2.replace(/--64/g, ' ');
    // console.log(temp3, "TEMP 3");
    // return temp3;
//     const decoded = arr1.map((obj) => {
//         return arr2.find(o => o.id === obj.id) || obj
//         });
//     const decoded = arr1.map()
//     console.log(decoded, "TRANSLATED")
//     return decoded
// }

function makeOutput(val) {
    let tempArr = []
    if (Object.keys(arr1) === (Object.keys(arr2))) {
        const newVal = Object.value(arr2)
        console.log(newVal)
    }
    return newVal;
}

function init() {
    let valHtml = '';
    for(let i = 0; i < ; i++){
        let val = String.fromCharCode(i);
        // console.log(i, val);
        valHtml += `${i - 96} = ${val}  `;
    }
    output1.innerHTML = valHtml;  
    // console.log(output1, "THIS IS THE OUTPUT");
}

//for each i, perhaps add another look-up for the Cyrillic

// a a 
// b б
// d д
// e e 
// f ф
// g г
// h х
// i и
// k k
// l л
// m м
// n н
// o о
// p п
// r р
// s с
// t т
// u у
// v в
// z з

// tv, burger, kofe, soup, vodka, lift, park, taksi, balerina, zhurnalist, radio, basketbol, internet, student, telefon

//given the cyrillic, type the English