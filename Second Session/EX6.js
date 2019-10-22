var counter = 0, number = Math.floor(Math.random() * 100);
console.log(number);
var guessed_number = prompt("Guess The Secret Number");
if (guessed_number) counter++;
while(guessed_number != number && guessed_number!= null){
    if (number < guessed_number)
        guessed_number = prompt("The Secret Number Is Less Than :" + guessed_number);
    else 
        guessed_number = prompt("The Secret Number Is Bigger Than :" + guessed_number);
    counter++;
}
if(guessed_number!== null)
alert("You Guessed The Secret Number After Try "+counter);
else alert("You Didn't Found The Secret Number -_- After Try "+counter+ " Which Was "+number);