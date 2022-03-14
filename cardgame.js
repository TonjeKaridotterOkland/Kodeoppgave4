
let cardDeck = [2,3,4,5,6,7,8,9];
let cardDeckPlayer2 = [2,3,4,5,6,7,8,9];
let suites = ["Hjerter", "Kløver", "Ruter", "Spar"];
let counter = 0; 
let player1 = 0;
let player2 = 0;
let winner;

const premiebunkeNumber = document.querySelector("#premiebunke-tall");
const player1Card = document.querySelector("#player-one-card");
const player2Card = document.querySelector("#player-two-card");
const showCounter = document.querySelector("#show-counter");
const showScore= document.querySelector("#show-score");
const premiebunkeDiv = document.querySelector("#premiebunke");
const player1Div = document.querySelector("#player-one");
const player2Div = document.querySelector("#player-two");
const button = document.querySelector("#button");

//function that makes sure the players and the premiebunke is not of the same suites.
function chooseSuites(){
    let chooseSuites = Math.floor(Math.random() * suites.length);  
    let chosenSuite = suites[chooseSuites];
    suites.splice(chooseSuites, 1);
    return chosenSuite;  
}
//function that assigns suites
function getSuite(){
    premiebunkeDiv.innerHTML = 'Premiebunke: ' + chooseSuites();  
    player1Div.innerHTML = 'Spiller 1: ' + chooseSuites();  
    player2Div.innerHTML = 'Spiller 2: ' + chooseSuites();  
}
getSuite();

//function that choose the card and removes it from the array.
function chooseCard(e){
    if(e.length === 0){
        return "Game over";
    }else{
        let pickACard = Math.floor(Math.random() * e.length);  
        let chosenCard = e[pickACard];
        e.splice(pickACard, 1);
        return chosenCard;
    } 
}
//function where we keep track of score, what round it is and the winner. 
function showNumbers(){
    player1Card.innerHTML = "";  
    player2Card.innerHTML = ""; 
    counter++;
    let number = chooseCard(cardDeck);
    let player2Number = chooseCard(cardDeckPlayer2);
    if(number == "Game over"){
        premiebunkeNumber.innerHTML = "";
        if(player1 > player2){
            winner = "vinneren er spiller 1";
        }else if(player2 > player1){ 
            winner = "vinneren er spiller 2";
        }else{
            winner = "det er uavgjort";
        }
        showScore.innerHTML = `
        Spiller 1 har ${player1} poeng, Spiller 2 har ${player2} poeng og ${winner}.
        `;
    }else{
        if(number > player2Number){
            player1 += number;
        }else if(player2Number > number){
            player2 += number; 
        }
        if(counter == 8){
            button.innerHTML = "Og vinneren er ...";
           
        }
        showCounter.innerHTML = 'Runde nr ' + counter;
        premiebunkeNumber.innerHTML = number;
        setTimeout(function(){
            player1Card.innerHTML = number;  
            player2Card.innerHTML = player2Number; 
        }, 600);
        
    }
}

