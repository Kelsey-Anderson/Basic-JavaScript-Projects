var X = 10; // Assigning a global variable
function Add_numbers_1() { //function that can access the global variable above
    document.write(20 + X +"<br>"); //This should output 10 in the browser
}

function Add_numbers_2() { //this function has local variable within itself
    var Y = 12;
    document.write(Y + 100);
    console.log(A + 50); //intentional error within this function to see what the console in Chrome Dev Tools will say to debug 
}
Add_numbers_1();
Add_numbers_2();

function get_Date() { //function that utilizes if statements
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML="How are you today?"; 
    }
    if (new Date().getHours() < 12) {
        document.getElementById("Greeting").innerHTML="How are you this morning?";
    }
}

function height_Function() { //function that utilizes if and else statements
    height = document.getElementById("height").value;
    if (height >= 48) {
        Ride = "You are tall enough to ride the roller coaster!";
    }
    else {
        Ride = "You are not tall enough to ride the roller coaster.";
    }
    document.getElementById("How_tall_are_you?").innerHTML = Ride;
}

function Time_function() { //function that utilizes the if, if else, and else statements
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 ==Time> 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}