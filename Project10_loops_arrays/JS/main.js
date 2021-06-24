function Call_Loop() {
    var Number = "";
    var x = 1;
    while (x < 21) {
        Number += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Number;
}

function string_length() {
    var str = "banana";
    var y = str.length;
    document.getElementById("string").innerHTML = y;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //example of an array function
    var kid_activities = []; //create variable that is array
    kid_activities[0] = "sleeping";
    kid_activities[1] = "playing";
    kid_activities[2] = "eating";
    kid_activities[3] = "crying";
    document.getElementById("Array").innerHTML = "Right now, that kid is " + kid_activities[3] + "."; //will return '...that kid is crying".
}

function constant_function() { // function that creates an object
    const Garden_equipment = {type:"mower", brand:"John Deere", color:"green"}; //object created as a constant with properties and values
    Garden_equipment.brand = "Stihl"; //change the value of the property "brand"
    Garden_equipment.color = "orange"; //change the value of the property "color"
    Garden_equipment.price = "$1900"; //added in the property "price" and gave it value of "$1900"
    document.getElementById("Constant").innerHTML = "The cost of the " + Garden_equipment.color + " " + Garden_equipment.type + " is " + Garden_equipment.price;
}


var X = 85;
document.write(X);
{
    let X = 35; // let keyword declaring variable within a function so it has function scope
    document.write("<br>" + X);
}
document.write("<br>" + X); //this will display 85 because it doesnt have access to the let variable within the curly brackets


function name_function(name) { //practicing a return statement
    return "Hello " + name;
  }
  document.getElementById("ret").innerHTML = name_function("Billy");

  let person = {  //creating an object, and below are its properties
    firstName: "John",
    lastName: "Smith",
    fullName : function() { //this is the object's method 
      return this.firstName + " " + this.lastName;
    }
  };

  document.getElementById("full_name").innerHTML = person.fullName(); 

let text = ""; // this loop utilizes both the continue and break statement
for (let i = 0; i < 10; i++) { //loop should continue from number 0 - 10
if (i === 3) { continue; } // the contiue skipped the 3
if (i ===8) {break;} // the break "jumped out" of the loop after the 7th iteration of the loop
text += "The number is " + i + "<br>";
}
document.getElementById("loop").innerHTML = text;




