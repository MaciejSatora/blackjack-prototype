$ (function(){
var playerscore, computerscore, nextcard, card;
var playerstatus = document.getElementById('player');
var playercards = document.getElementById('player-cards');
var computerstatus = document.getElementById('computer');
var computercards = document.getElementById('computer-cards');
var possiblecards = ['0','1', '2 ', '3 ', '4 ','5 ', '6 ', '7 ','8 ', '9 ', '10 ','Jack ', 'Queen ', 'King ', 'Ace '];
var possibleflush = ['Diamonds', 'Spades', 'Clubs', 'Hearts'];
var cardstring;

$("#newgame").click(reset);
$("#hit").click(playerhit);
$("#stand").click(stand);


function reset() {
	playerscore = computerscore = 0;
	settlehand();


}
function playerhit() {
	nextcard = Math.floor(Math.random() * 13)+2;
	cardstring = possiblecards[nextcard];
	console.log(nextcard);
	console.log(cardstring);
    if (nextcard > 11) {playerscore += 10; playerstatus.innerHTML = playerscore; alert("Player gets a face card and now has " + playerscore) ;}
    else {playerscore += nextcard; playerstatus.innerHTML = playerscore; alert("Player gets a : " + nextcard + "and now has " + playerscore) ; }
    if (playerscore > 21) {
    	alert("Player has : " + playerscore + " BUST!!!")
    }

}

function stand() {
	dealerdraws();
	if (playerscore > computerscore) {alert("Player wins");}
		

}
function settlehand() {
    nextcard = Math.floor(Math.random() * 13)+2;
    if (nextcard > 11) {playerscore = 10;}
    else {playerscore += nextcard;}
    nextcard = Math.floor(Math.random() * 13)+2;
    if (nextcard > 11) {playerscore += 10;}
    else {playerscore += nextcard;}
    playerstatus.innerHTML = playerscore;
    nextcard = Math.floor(Math.random() * 13)+2;
    if (nextcard > 11) {computerscore = 10;}
    else {computerscore += nextcard;}
    computerstatus.innerHTML = computerscore;
}
function dealerdraws () {
	do {
		dealerdraw();
	
	} while (computerscore<17)
}
function dealerdraw () {
nextcard = Math.floor(Math.random() * 13)+2;
    	if (nextcard > 11) {computerscore += 10; computerstatus.innerHTML = computerscore; alert("Dealer gest a face card and now has : " + computerscore);}
    	else {computerscore += nextcard; computerstatus.innerHTML = computerscore; alert("Dealer gets a : " + nextcard + "and now has " + computerscore);}
    	if (computerscore > 21) alert("House busts with : " + computerscore + "Player wins");
    }
});