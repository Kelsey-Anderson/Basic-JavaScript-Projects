document.write('hello world! ');
var A = "This is a string!";
window.alert(A);
document.write("A dog walks into a bar and says, \"woof!\" ");
document.write("\"Be who you are and say what you feel,"
+ " because those who mind don't matter and those who matter don't mind.\""
+ "-Dr. Seuss");

var B = " Concatenated" + " String. "
document.write(B)

var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermione", 
    Daughter = "Penny", Son = "Zorro";
var Dad = Dad.fontcolor("green");
document.write(Dad);
var Mom = Mom.fontcolor("purple");
document.write(Mom);
var Daughter = Daughter.fontcolor("blue");
document.write(Daughter);
var Son = Son.fontcolor("black");
document.write(Son);

document.write(3 + 3);

function My_First_Function() {          //Defining a function and naming it
    var str = "This text is green!";    //Defining a variable and giving it a string value
    var result = str.fontcolor("green"); //Using the fontcolor method on str variable
    document.getElementById("Green_Text") .innerHTML = result; //Putting the value of 
                                            //result into HTML element with "Green_Text" ID
}

