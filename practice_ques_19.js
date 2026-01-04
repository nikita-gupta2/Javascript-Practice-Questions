
const n = prompt("Enter max number range for game");
console.log(n);

const rand = Math.floor(Math.random() * n) + 1;
console.log(rand);
let num = prompt("Guess a number between 1 to n / quit to exit");
while(true){
    
    if (num == "quit"){
        console.log("you have exit the game");
        break;
    }
    if ( rand == num){
        console.log("Congratulations , you have guess correct num");
        break;
    }else if(rand > num){
         num = prompt("hint:your guess is too small try again");
    }else if(rand < num){
         num = prompt("hint:your guess is too large try again");
    }
    else{
        console.log("your guess wrong");
    }
}