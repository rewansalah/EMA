function switchLanguage(lang){
    document.documentElement.lang=lang ;
}

let valueDisplays = document.querySelectorAll(".num-container");
let interval= 1;


valueDisplays.forEach(valueDisplay =>{
    let startValue = 0 ;
    let endValue = parseInt(valueDisplay.getAttribute
        ("data-val"));

   let duration = Math.floor(interval / endValue);
   let counter = setInterval(function(){

    startValue += 1 ;
    valueDisplay.textContent = startValue ;

   });


});