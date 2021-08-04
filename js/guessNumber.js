let min = 1;
let max = 1000000;
let count = 0;

function verify(guess){
    console.log(max);
    console.log(min);
    if (guess > max / 2) {
        min += Math.floor((max - min) / 2);
        return 1;
    }
    else if (guess < max / 2) {
        max = max / 2;
        return -1;
    }
    else {
        console.log(`Programm win number is ${max}`);
        return 0;
    }
}

function guessNumber(number) {
    while (count < 50) {
        if(!verify(number)) {    
            
            return 1;
        }
        else {
            count++;
        }       
    }   
    console.log("You are lose"); 
    return 0;
}
const number = Math.floor(Math.random() * (1000000 - 1) + 1);
console.log(number);
guessNumber(number)