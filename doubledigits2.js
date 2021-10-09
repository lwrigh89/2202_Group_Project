
let zero = [" _ ","| |","|_|"];
let one = ["   ","|  ","|  "];
let two = [" _ "," _|","|_ "];
let three = [" _ "," _|"," _|"];
let four = ["   ", "|_|", "  |"];
let five = [" _ ", "|_ ", " _|"];
let six = [" _ ", "|_ ", "|_|"];
let seven = [" _ ", "  |", "  |"];
let eight = [" _ ", "|_|", "|_|"];
let nine = [" _ ", "|_|", "  |"];
let digits = [zero, one, two, three, four, five, six, seven, eight, nine];

function printSingles(){

}
        
function printTens(){
        
}
        
function printTwinties(){
        
}
        
function printThirties(){
        
}
        
function printFourties(){
        
}
        
function printFifties(){
        
}
        
function printSixties(){
        
}
        
function printSeventies(){
        
}

function printEighties(){
    let eighties = "";
    let firstDigit = digits[8];
    for (i=0; i < digits.length; i++){
        
        let secondDigit = digits[i];
        
        for (j = 0; j < 3; j++){
            eighties += firstDigit[j] + secondDigit[j];
            eighties += "\n"; 
        }
   }     
   console.log(eighties);
}
        
function printNinties(){
        
}

if (!module.parent){
    printEighties();
}