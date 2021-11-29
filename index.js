let randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("demo").innerHTML = "R-" + randomNumber ;
let numOfTries = 0;
document.getElementById("tries").innerHTML = "Try " + numOfTries;
const PreviousGuess = [];

document.getElementById("myButton").onclick = function(){

    var guessedNumber = document.getElementById("Number").value;
    document.getElementById("numberGuessed").innerHTML = "-->  " + guessedNumber;
    /*Previous Guess*/
    if (PreviousGuess.length < 10){
        PreviousGuess.push(guessedNumber);
        document.getElementById("PreviousGuess").innerHTML = "PreviousGuess: "+ PreviousGuess;
    }

    /*tentatives compteur*/
    numOfTries+= 1;
    document.getElementById("tries").innerHTML = "Try " + numOfTries;
    if((numOfTries==10 || numOfTries>10) && guessedNumber!=randomNumber){
        document.getElementById("tries").innerHTML = "game over";
        document.getElementById("tries").style.backgroundColor="red";
        document.getElementById("demo").innerHTML = "The correct number is " + randomNumber ;
        alert('Game Over');
    }
    else if(guessedNumber == randomNumber){
        document.getElementById("tries").innerHTML = "You Win";
        document.getElementById("tries").style.backgroundColor="green";
        alert('You Win after '+ PreviousGuess.length+' tries');
    }
    else{
        document.getElementById("tries").style.backgroundColor="rgb(50, 182, 205)";
    }

    /*input*/
    if((guessedNumber>100)||guessedNumber<1){
        document.getElementById("hiorlow").innerHTML = "the Number is between 1 and 100";
        document.getElementById("hiorlow").style.backgroundColor="red";
    }
    else if ((guessedNumber == randomNumber) && (numOfTries > 2)){
        document.getElementById("hiorlow").textContent = "the number you guessed is correct";
        document.getElementById("hiorlow").style.backgroundColor="green";
    }
    else if ((guessedNumber == randomNumber) && (numOfTries <= 2)){
        document.getElementById("hiorlow").textContent = "the number you guessed is correct you are genius";
        document.getElementById("hiorlow").style.backgroundColor="green";
    }
    else if ((guessedNumber>randomNumber+10)){
        document.getElementById("hiorlow").innerHTML = "Too High";
        document.getElementById("hiorlow").style.backgroundColor="red";
    }
    else if((guessedNumber>randomNumber) && (guessedNumber<=randomNumber+20)){
        document.getElementById("hiorlow").innerHTML = "Your guesse is higher but almost there";
        document.getElementById("hiorlow").style.backgroundColor="tomato";
    }
    else if ((guessedNumber<randomNumber-10)){
        document.getElementById("hiorlow").innerHTML = "Too low";
        document.getElementById("hiorlow").style.backgroundColor="blue";
    }
    else if ((guessedNumber<randomNumber) && (guessedNumber>=randomNumber-20)){
        document.getElementById("hiorlow").innerHTML = "Your guess is lower but almost there";
        document.getElementById("hiorlow").style.backgroundColor="orange";
    }
    else {
        document.getElementById("hiorlow").innerHTML = "enter a valid value";
    }
        /* score */
    if((guessedNumber==randomNumber) && (numOfHelp==0) && (numOfTries <= 2)){
        document.getElementById("demo").innerHTML = "You win with 5 Stars * * * * * ";
    }
    else if((guessedNumber==randomNumber) && (numOfHelp==0) && (numOfTries > 2)){
        document.getElementById("demo").innerHTML = "you win with 4 Stars * * * * ";
    }
    else if((guessedNumber==randomNumber) && (numOfHelp==1)){
        document.getElementById("demo").innerHTML = "You win with 3 Stars * * * ";
    }
    else if((guessedNumber==randomNumber) && (numOfHelp==2)){
        document.getElementById("demo").innerHTML = ("You win with 2 Stars * * ");
    }
    else if((guessedNumber==randomNumber) && (numOfHelp>=3)){
        document.getElementById("demo").innerHTML = ("You win with 1 star * ");
    }
}
/*help button*/
let numOfHelp = 0;
document.getElementById("numOfHelps").innerHTML = "Helps you get: " + numOfHelp;
document.getElementById("help").onclick = function(){
    numOfHelp += 1;
    if(numOfHelp <= 3){
        document.getElementById("numOfHelps").innerHTML = "Helps you get: " + numOfHelp;
    }
    else{
        document.getElementById("numOfHelps").innerHTML = "Out of Helps";
        document.getElementById("numOfHelps").style.backgroundColor="red";
    }
    if(numOfHelp == 1){
        if((randomNumber%2)==0){
            document.getElementById("helpYouGet").innerHTML = "Help1: The RandomNumber is an even number";
        }
        else if((randomNumber%2)!=0){
            document.getElementById("helpYouGet").innerHTML = "Help1: The RandomNumber is an odd number";
        }
    }
    else if(numOfHelp == 2){
        if((randomNumber%3)==0){
            document.getElementById("helpYouGet").innerHTML = "Help2: The RandomNumber is a multiple of 3";
        }
        else {
            document.getElementById("helpYouGet").innerHTML = "Help2: The RandomNumber is not a multiple of 3";
        }
    }
    else if(numOfHelp == 3){
        let RandomNumberBtwn20 = Math.floor(Math.random() * 20) + 5;
        let RandomNumberPls20 = randomNumber + RandomNumberBtwn20;
        let RandomNumberMins20 = randomNumber - RandomNumberBtwn20;
        document.getElementById("helpYouGet").innerHTML = "Help3: The Random Number is between " + RandomNumberMins20 + " And " + RandomNumberPls20;
    }
    else {
        document.getElementById("helpYouGet").innerHTML = "you are out of Helps :(" ;
        document.getElementById("helpYouGet").style.backgroundColor="red";
    }
}