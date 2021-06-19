document.write(typeof "Word"); //Using typeof operator to display the data type 
document.write(typeof 3); //Using typeof operator to display the data type 
document.write("10"+5); //combines a string and a number.


console.log(2==1); //using the == to see what is displayed in dev tools/console 
document.write(2==1); // using the == to display false on the browswer
document.write(10===10); // using the === to display true
document.write(10==="banana"); // using === to compare different data type AND different value
document.write(10==="ten"); // using === to compare different data type but the same value

document.write(5>2 && 10>4); //using the && to compare two sets of data that displays true
document.write(5>2 && 4>10);//using the && to compare two sets of data that displays false
document.write(5>2 || 10>14); // using the || to compare two sets of data that displays true
document.write(5<2 || 10>14); // using the || to compare two sets of data that displays false

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10); //Using the NOT operator in a function
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5>10); //using the NOT operator in a function
}
