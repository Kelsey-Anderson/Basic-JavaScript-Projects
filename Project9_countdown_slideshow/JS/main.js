//Countdown timer section //
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {  // The only problem is I don't know how to make the countdown timer STOP after it's reached zero and alerted?
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) {
        alert("Time's up!");
    }
        }
    tick();
}


//Slideshow section//
var slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

var slideIndex = 0;
showSlides();


