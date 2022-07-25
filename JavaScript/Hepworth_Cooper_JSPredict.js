//Prediction 1: "I was born in 1985"

function myBirthYearFunc1(){
    console.log("I was born in " + 1985);
}

myBirthYearFunc1();

//Prediction 2: "I was born in undefined"

function myBirthYearFunc2(birthYearInput){
    console.log("I was born in " + birthYearInput);
}

myBirthYearFunc2();

// Prediction 3: "num1 is undefined" "num2 is undefined"

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
    }
    
add();