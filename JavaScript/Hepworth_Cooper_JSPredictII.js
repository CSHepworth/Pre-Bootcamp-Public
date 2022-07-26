//Prediction 1: "PaulSmith1234Main StreetSt. LouisMO12345"

function displayContactInfo() {
    var auntContactInfo = ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}

displayContactInfo();

//Prediction 2: (3) ['broccoli', 'ice cream', 'hasbrowns']

function displayGrocerylist() {
    var produce = ["apples", "oranges"];
    var frozen = ["broccoli", "ice cream"];
    frozen.push("hashbrowns");
    console.log(frozen);
}

displayGrocerylist();

//Prediction 3: (4) ['Bambi', Beetlejuice', 'E.T', 'Toy Story']

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
