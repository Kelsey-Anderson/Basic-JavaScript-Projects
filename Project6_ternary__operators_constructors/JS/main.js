function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value; 
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough"; //using a ternary operator "?" assigning a value to a variable based on a condition
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { // The "Vehicle()" function is object constructor
    this.Vehicle_Make = Make; //Using "this" keyword 
    this.Vehicle_Model = Model;//Using "this" keyword
    this.Vehicle_Year = Year;//Using "this" keyword
    this.Vehicle_Color = Color;//Using "this" keyword
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //creating variable and calling to create an instance of the class 
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");//creating variable and calling to create an instance of the class
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");//creating variable and calling to create an instance of the class

function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Next_Function() { //This is my nested function code
    document.getElementById("Nested_Function").innerHTML = Count(); //getElementById referenced back to the P element ID to call the Count() function
    function Count() { 
        var Starting_Point = 9; //Assigning variable and giving it a value
        function Plus_One() {Starting_Point += 1;} //Nested function
        Plus_One();
        return Starting_Point; //returns the variable + the nested function 
    }
}