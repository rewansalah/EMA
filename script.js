function switchLanguage(lang){
    document.documentElement.lang=lang ;
}



let valueDisplays = document.querySelectorAll(".num-container");
let interval = 1;

valueDisplays.forEach(valueDisplay => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));

    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 4;
        valueDisplay.textContent = startValue;

        if (startValue >= endValue) {
            clearInterval(counter); // Stop the counter when it reaches the specified value
        }
    }, duration);
});


//  our-clients "logos"

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length){slideIndex = 1}
    if(n< 1){slideIndex = slides.length }
    for(i = 0 ; i< slides.length ; i++ ){
        slides[i].style.display = "none";

    }

    for(i=0 ; i< dots.length ; i++){
        dots[i].className = dots[i].className.replace("active", "");

    }
    slides[slideIndex - 1].style.display = "block" ;
    dots[slideIndex - 1].className += "active" ;

}






