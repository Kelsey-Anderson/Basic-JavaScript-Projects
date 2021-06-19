function my_Dictionary() { //Creating a dictionary
    var Animal = {  
        Species:"Cat",
        Color:"Orange",
        Breed:"Tabby",
        Age:5,
        Sound:"Meow!" 
    };
    delete Animal.Sound; //This is a delete operator that removes the value from the dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //Here I called the function but the 
                                                                    //output will be "undefined" since it no longer exists
}