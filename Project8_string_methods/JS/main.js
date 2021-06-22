function full_Sentence() { //function utilizing the concat() method to connect multiple strings
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { // Slice method function
    var Sentence = "All work and no play makes Johnny a dull boy."; //this is the full sentence
    var Section = Sentence.slice(27,33); //This indicates which characters in the string will be cut out and displayed
    document.getElementById("Slice").innerHTML = Section;
}

function make_Uppercase() { // function to make text all uppercase
    var lower = "this is all uppercase text."; //assign variable 'lower' with a string
    var res = lower.toUpperCase(); //assign variable 'res' that applies the uppercase method
    document.getElementById("Uppercase").innerHTML = res; //display the result
}

function search_Function() { // function to perform a search
    var ABC = "Click the button to search for \"green\" and display position of the match." //assign variable 'ABC' that is a string
    var x = ABC.search("green"); // assign variable 'x' that applies the search function for the word 'green'
    document.getElementById("search_green").innerHTML = x; //display the result
}

function string_Method() { //this function utilizes the 'toString' method
    var X = 182; 
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //this function will take a variable that is a number and shorten it 
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = "Result =" + X.toPrecision(10);
}

function fixed_number_function() { //this function will basically round to the fixed decimal point
    var num = 12938.3012987376112;
    var n = num.toFixed(2);
    document.getElementById("fixed").innerHTML = n;
}

function value_function() { //this will display the value of a variable string
    var str = "Here is a string of text.";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
}