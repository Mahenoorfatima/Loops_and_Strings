for (let noor = 1; noor <= 12 ; noor++) {
    console.log("Mahenoor Fatima");
}

for (let noor = 1; noor <=2; noor = noor+1 ){
    console.log("Noor")
}

//Calculate sum of 1 to 12
let sum = 0;

for (let i= 1; i <=12; i++){
    sum = sum + i;
}

// console.log("Sum ", sum);

//Calculate sum of 1 to n
let add = 0;
let n= 100;

for (let i= 1; n <=n; i++){
    sum = sum + i;
}

// console.log("Sum ", add)


for(let num = 0; num <=100; num++){
    if(num%2===0){
        console.log("Even no" , num)
    }
}

// Practice Qno2
let gameNum = 25;
let userNum = prompt("Guess the Game Number : ");

while(userNum != gameNum){
    userNum = prompt("You entered wrong number. Guess again : ");
}

console.log("Congratulations ypu entered the right number!");


//String Practice Qno2

let fullName = prompt("Enter your Full Name without spaces: ")
let userName = "@" + fullName + fullName.length;
console.log(userName)


