let card = document.getElementById("card");
let cards = []

const deck = document.getElementById("card-deck");

let best = 0;
let tries = 0;
let counter = document.querySelector(".move");
let bestCounter = document.querySelector(".best");

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
}

var displayCard = () => {
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

function openCard() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        countTries();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};

function matched(){
    
}

function unmatched(){
    
}

function disable(){
    
}

function enable(){
    
}

function countTries(){
    tries++;
    counter.innerHTML = tries;
    if (tries > best){
        best = tries;
        bestCounter.innerHTML = best;
    }
}

for (var i = 0; i < cards.length; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", openCard);
    card.addEventListener("click",congratulations);
};