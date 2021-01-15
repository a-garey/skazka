//matching game -- match word tiles to pictures

// //initial page loading
// if(document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', ready());
// } else {
//     ready();
// }

//variables 
const matchBtn = document.getElementById("matchBtn");
let tiles = Array.from(document.getElementsByClassName('tile'));
let matchGame = new MixOrMatch(100, tiles);  

//event listeners
matchBtn.addEventListener('click', (e) => {
    console.log("it's working");
    ready();
    startMatchGame();
})

tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        // matchGame.flipCard(tile);
    })
})


//classes
class AudioController {
    constructor() {
        this.flipSound = new Audio("static/audio/flip.mp3")
        this.matchSound = new Audio("static/audio/match.wav")
    }
    flip() {
        this.flipSound.play();
    }
    match () {
        this.matchSound.play();
    }
}

class MixOrMatch {
    constructor(totalTime, tiles) {
        this.tilesArray = tiles;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.matchTimer = document.getElementById('time-remaining');
        this.ticker = document.getElementById("flips");
        this.audioController = new AudioController;
    }
    startMatchGame() {
        this.tileToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedTiles = [];
        this.busy = true;
    }
    canFlipTile(tile) {
        // return (!this.busy && !this.matchedTiles.includes(tile) && tile !== this.tileToCheck);
        return true
    }
    flipTile(tile ) {
        if(this.canFlipTile(tile)) {
            this.audioController.flip();

        }
    }
}

//methods



