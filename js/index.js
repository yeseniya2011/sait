var sliderList = document.querySelectorAll(".slider_item");


var backBtn = document.querySelector('.btn--left');
var fwdBtn = document.querySelector('.btn--right');

var counter = 0;


backBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    var currentSlide = document.querySelector('.current-slide');
    currentSlide.classList.remove('current-slide');
    counter --;
    if(counter < 0){
        counter = sliderList.length-1;
    }
    sliderList[counter].classList.add('current-slide');
}) 

fwdBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    var currentSlide = document.querySelector('.current-slide');
    currentSlide.classList.remove('current-slide');
    counter ++;
    if(counter >= sliderList.length){
        counter=0;
    }
    sliderList[counter].classList.add('current-slide');
})