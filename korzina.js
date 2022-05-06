window.onload = function () {
    let choose = document.getElementById("plus-esya");
    choose.onclick = incrementClick;
    let minus = document.getElementById("minus-eseniya");
    minus.onclick = resetCounter;
}
var counterWow = 0;
incrementClick = function(){
    updateDisplay(++counterWow);
}
function  resetCounter(){
    if (counterWow>0){
        updateDisplay(--counterWow);
    }
}
function updateDisplay(counterWow){
    document.getElementById("counter-label").innerHTML = counterWow;
}