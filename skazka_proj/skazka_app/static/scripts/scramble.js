//Word scramble
const gameArea = document.querySelector('.gameArea');
const btn = document.createElement('button');
const output = document.createElement('div');
btn.textContent = "Start Game";
output.textContent = "Click the button ";

//Add to HTML
gameArea.append(btn);
gameArea.append(output);

//game start values
const myWords = ["акула", "геккон", "лев", "зебра", "слон"]

//event listeners
btn.addEventListener('click',(e)=>{
    myWords.sort(()=>{ return 0.5 - Math.random()});
    let selWord = myWords[0];
    output.textContent = `${selWord}`;
    console.log(myWords);
});   