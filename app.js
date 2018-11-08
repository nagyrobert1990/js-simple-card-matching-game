let card = document.getElementById("card");
let cards = []

const deck = document.getElementById("card-deck");

let best = 0;
let tries = 0;
let counter = document.querySelector(".move");

let matchedCard = document.getElementsByClassName("match");

var openedCards = [];

var startEl = document.getElementById("start");
var gameEl = document.getElementById("game");

function showStart() {
    gameEl.style.visibility = 'hidden';
    startEl.style.visibility = 'visible';
}

function showGame(){
    gameEl.style.visibility = 'visible';
    startEl.style.visibility = 'hidden';
}

document.body.onload = showStart();

function shuffle(array) {
    var currentIndex = array.length, tempValue, randIndex;

    while (currentIndex !== 0) {
        randIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempValue = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = tempValue;
    }

    return array;
};

function startGame(){
    showGame();
    
    cards = shuffle(cards);
    
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, (item) => {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
    
    tries = 0;
    counter.innerHTML = tries;
    
    clearInterval(interval)
}