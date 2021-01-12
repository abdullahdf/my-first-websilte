// console.log('hello welcome to my new wolrd');
// // alert('this is me abdullah');
//
// var
// b ='smoothie';
// console.log(b);
//
// var somenumber =45;
// console.log(somenumber);
//
// /*
//  you can handle your HTML from here like this
//  var age =  prompt('what is your age?');
//
//  document.getElementById('sometext').innerHTML = 'hey its me';
// */
//
//
// // mathamatics
//
// var num1= 10;
// num1 ++ ;
// console.log(num1);
// num1--;
// console.log(num1);
//
// console.log(num1%6);
//
// num1 += 10;
// console.log(num1);
//
// // create a function
//  function fun() {
//   console.log('this is a function')
// }
// // call a function
// fun() ;
//
// /* lets create a function that take in a name and says hello followed by your name
// for eg
// name; abdullah
// return; hello abdullah
// */
// // var yourage = prompt('what is your age?');
//
//
// function greeting(yourage){
//   var result1 = 'hello '+ 'your age is ' + yourage;
//   console.log(result1);
// }
// // greeting(yourage);
//
// // var yourname = prompt('what is your name?');
// //
// // function greeting (yourname){
// // var result2 = 'hello your name is' + yourname;
// // console.log(result2);
// // }
// //
// // greeting(yourname);
//
// //how do arguments work in a function
// //how do we add two number in a function
//
// function sumnumber(num1 ,num2){
//    var result = num1 + num2;
//    console.log(num1+num2);
// }
//
// sumnumber(3 ,10);
// /*
//
// //while loop
// var num = 0 ;
//
// while (num<100){
//   num+=1;
//   console.log(num);
// }
// */
//
// //for loop
// for (let num = 0; num<=100; num++){
//   console.log(num);
// }
//
// //data types in java script
//
// let yourage = 18; //number
// let yourname = 'bob';//string
// let name = {first:'jane', last:'doe'};//object
// let truth = false;//boolean
//  let groceries = ['apple', 'banana', 'oranges'];//array
// let random; //undifined
// let nothing = null //value null
//
// //string in javascript [common methoods]
//  let fruit = 'banana, apple, blackberry, orange';
// let morefruirs = 'banana\napple'; //new line
// console.log(morefruirs);
//
// console.log(fruit.length);
// console.log(fruit.indexOf('ana'));
// console.log(fruit.slice(2, 6));
// console.log(fruit.replace('ban', 123));
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(',')); //split by comma
// console.log(fruit.split('')); //split by charecter 'b' 'a' 'n' 'a' 'n' 'a' 'n' 'a'
//
//
// //array
// let fruits = ['banana', 'apple', 'blackberry', 'orange'];
// fruits = new Array('banana', 'apple', 'blackberry', 'orange');//other method to do same thing
//
// // alert(fruits[2]);
//
// fruits[0] = 'pear'
// console.log(fruits);
//
// for (let i = 0; i < fruits.length; i++){
//   console.log(fruits[i]);
// }
//
// //array common methoods
//
// console.log('to string',fruits.toString());
// console.log(fruits.join('*'));
// console.log( fruits.pop(), fruits); //removes last item
// console.log(fruits.push('pineapple'), fruits);//appends
// console.log(fruits[4]);
// fruits[fruits.length]= 'new fruit';//same as push
// console.log(fruits);
// fruits.shift(); //removes first element
// console.log(fruits);
//
// fruits.unshift('kiwi');
// console.log(fruits); //add first
//
// //this is to combain two lists or you can say Array
// let vegetables = ['asparagus', 'tomato', 'broccoli'];
// let allGroceries = fruits.concat(vegetables);
// console.log(allGroceries);
//
// console.log(allGroceries.slice(1, 4));
// console.log(allGroceries.reverse());
// console.log(allGroceries.sort());
//
// let someNumber = [5, 10, 3, 4, 7, 9, 22, 21, 54, 63, 2]
// console.log(someNumber.sort(function(a, b){return a-b}));//if you want dis order(decending order) then you can type b-a
//
// let emptyArray = new Array ();
// for (let num =0 ; num <= 10; num++){
//   emptyArray.push(num);
// }
//
// console.log(emptyArray);
//
// //objects in javascript
//
// let student ={
//   first :'Abdullah',
//   last :'DF',
//   age:17,
//   height:170,
//   studentInfo: function(){
//     return this.first +'\n'+this.last +'\n' + this.age;
//   }
//  }
// // console.log(student.first);
// // console.log(student.last);
// //
// // student.first = 'not Abdullah'; //change value
// // console.log(student.first);
// // student.age++;
// // console.log(student.age);
// console.log(student.studentInfo());
//
//
// //conditionals, control flow (if else)
// /*
// 18-35 is my target customers demographic
// && and
// || or
// */
// var age = 45;
//
// if ( (age >= 18) && (age <= 35)) {
//   status = 'target demo';
//   console.log(status);
// } else status = 'not my audience';
// console.log(status);
//
// //switch statements
// /*
// differenciat between weekday and weekend
// day 0 --> sunday
// day 6 --> saterday
// day 4 --> thursday
// */
//
// switch (3) {
//   case 0:
//   text = 'weekend';
//   break;
//   case 5:
//   text = 'weekend';
//   break;
//   case 6:
//   text = 'weekend';
//   break;
//
//     default:
//     text = 'weekday';
//
//
// }
// console.log(text);


// challenge your age in Days

function ageInDays(){
  var birthYear = prompt('what year you were born?');
  var ageInDayss = (2020 - birthYear)* 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('you are '+ ageInDayss +' days old');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);

}

function reset() {
   document.getElementById("ageInDays").remove();
}
//create cats
function generateCat(){
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.src = 'cat.jpg';
  div.appendChild(image);
}
//rock paper scissors challenge:

function rpsGame(yourchoice){
  console.log(yourchoice);

  var humanChoice, botchoice;
  humanChoice = yourchoice.id
  botchoice = numberToChoice(randToRpsIn());
  console.log('computerchoice', botchoice);

  results = decideWinner(humanChoice,botchoice);//[0.1]human lost\bot won
  console.log(results);

  message = finalMessage(results);//{'messege':'you won', 'color':'green'}
  console.log(message);

  rpsFrontEnd(yourchoice.id, botchoice, message);
}
function randToRpsIn(){
  return Math.floor(Math.random() *3);
}
function numberToChoice(number){
  return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(yourchoice, computerchoice){
  var rpsDatabase = {
    'rock':{'scissors' : 1, 'rock' : 0.5, 'paper' :0},
    'paper':{'rock': 1 , 'paper' : 0.5 , 'scissors': 0},
    'scissors': {'paper' : 1 , 'scissors' : 0.5 , 'rock' : 0},
  };
  var yourScore = rpsDatabase[yourchoice][computerchoice];
  var computerScore = rpsDatabase[computerchoice][yourchoice];
  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
  if (yourScore === 0) {
    return {'message': 'you lost!', 'color':'red'};
  }else if (yourScore === 0.5) {
      return {'message' : 'you tied', 'color':'yellow'};
    }else{
      return {'message' : 'you won', 'color':'green'};
    }
  }

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
  var imagesDatabase = {
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src
  }
  //lets remove all the images
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
  messageDiv.innerHTML = "<h1 style='color:" +finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
  botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(143, 38, 24, 1);'>"

  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//Challenge 4 : change the color of all colors
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [] ;
for (let i=0; i < all_buttons.length; i++){
  copyAllButtons.push(all_buttons[i].classList[1])
}
console.log(copyAllButtons);


function buttonColorChange(buttonThingy){
  if (buttonThingy.value ==='red'){
    buttonsRed();
  }else if (buttonThingy.value ==='green') {
    buttonsGreen();
  }else if (buttonThingy.value ==='reset') {
    buttonColorReset();
  }else if (buttonThingy.value ==='random'){
    randomColors();
  }
}

function buttonsRed(){
  for (let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}

function buttonsGreen(){
  for (let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function buttonColorReset(){
  for (let i=0; i<all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }

}
function randomColors(){
  var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

  for (let i=0; i< all_buttons.length; i++){
    var randomNumber = Math.floor(Math.random()*4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);

  }
}
//challenge5 blackjack
let blackjackGame = {
  'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score': 0},
  'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score': 0},
  'cards':['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
  'cardsMap':{'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8' :8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11]},
  'wins' : 0,
  'losses': 0,
  'draws' : 0,
  'isStand' : false,
  'turnsOver' : false,
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('swish.m4a');
const winSound = new Audio('cash.mp3');
const lossSound = new Audio('aww.mp3');



document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit(){
  if (blackjackGame['isStand'] === false){
  let card = randomCard();
  showCard(card, YOU);
  updateScore(card, YOU);
  showScore(YOU);
   }
}


function showCard(card, activePlayer){
  if (activePlayer['score'] <= 21){
  let cardImage = document.createElement('img');
  cardImage.src = `card/${card}.png`;
  document.querySelector(activePlayer['div']).appendChild(cardImage);
  hitSound.play();
   }
}
function blackjackDeal(){
  if(blackjackGame['turnsOver'] === true){


    blackjackGame['isStand'] = false;
      //showResult(computeWinner());
  let yourImages = document.querySelector('#your-box').querySelectorAll('img');
  let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

  for (i=0; i < dealerImages.length; i++){
  dealerImages[i].remove();
  }
  for (i=0; i < yourImages.length; i++){
  yourImages[i].remove();
  }

  YOU['score'] = 0;
  DEALER['score'] = 0;

  document.querySelector('#your-blackjack-result').textContent = 0;
  document.querySelector('#dealer-blackjack-result').textContent = 0;

  document.querySelector('#your-blackjack-result').style.color = '#000000';
  document.querySelector('#dealer-blackjack-result').style.color = '#000000';

  document.querySelector('#blackjack-result').textContent = "Let's play";
  document.querySelector('#blackjack-result').style.color = 'black';

  blackjackGame['turnsOver'] = true;
   }
}


function randomCard(){
  let randomIndex = Math.floor(Math.random()*13);
  return blackjackGame['cards'][randomIndex]
}

function updateScore(card, activePlayer){
  if (card === 'A'){
  //if adding 11 keeps me belove 21 then add 11 else add 1.
  if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
    activePlayer['score']+= blackjackGame['cardsMap'][card][1];
  }else {
    activePlayer['score'] += blackjackGame['cardsMap'][card][0];
  }
}else {


  activePlayer['score']+= blackjackGame['cardsMap'][card];
  }
}

function showScore(activePlayer){
  if (activePlayer['score'] >21){
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  }else {
  document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
}

function sleep(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic(){
  blackjackGame['isStand'] = true;

  while (DEALER['score'] < 16 && blackjackGame['isStand'] === true){

  let card = randomCard();
  showCard(card, DEALER);
  updateScore(card, DEALER);
  showScore(DEALER);
  await sleep(1000);
}

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);

}




//compute winner and just who won;
// update the wins draw and losses
function computeWinner(){
  let winner;

  if (YOU['score'] <= 21 ){
    //ocndition: higher score than dealer or when dealer busts but you're 21 or under 21;
    if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)){
      blackjackGame['wins']++;
      winner = YOU;


    }else if (YOU['score'] < DEALER['score']){
      blackjackGame['losses']++;
      winner = DEALER;

    }else if (YOU['score'] === DEALER['score']){
      blackjackGame['draws']++;

    }

    //condition: when user bust but dealer doesn't;
  }else if (YOU['score'] > 21 && DEALER['score'] <= 21){
    blackjackGame['losses']++;
    winner = DEALER;

    //condition : when you and the dealr bust;l

  }else if(YOU['score'] > 21 && DEALER['score'] > 21){
    blackjackGame['draws']++;

  }
  console.log(blackjackGame);
  return winner;
}

function showResult(winner){
  let message, messageColor;

  if (blackjackGame['turnsOver'] === true){

  if (winner === YOU){
    document.querySelector('#wins').textContent = blackjackGame['wins'];
    message = 'You won!';
    messageColor = 'green';
    winSound.play();

  }else if (winner === DEALER ) {
    document.querySelector('#losses').textContent = blackjackGame['losses'];
    message = 'You lost';
    messageColor = 'red';
    lossSound.play();

  }else {
    document.querySelector('#draws').textContent = blackjackGame['draws'];
    message = 'You drew';
    messageColor = 'black';
  }

   document.querySelector('#blackjack-result').textContent = message;
   document.querySelector('#blackjack-result').style.color = messageColor;
  }
}
