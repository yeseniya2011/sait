var link=document.querySelector(".login-link");
var popup=document.querySelector(".model-login");
var close=popup.querySelector(".model-close");
var isStorageSupport=true;
var yeseniya="";
try{
    yeseniya=localStorage.getItem("item")
}catch(err){
    isStorageSupport=false;
}
link.addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.add("model-show");
});
close.addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.remove("model-show");
});