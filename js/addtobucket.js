const buttons = document.querySelectorAll(".shop-btn");

buttons.forEach(el=>{
    el.addEventListener("click",
    function(el){
        const articul = el.target.getAttribute("data-articul");
        const bukket = localStorage.getItem("bukket");
        if(bukket){
            const bukketArr = JSON.parse(bukket);
            if(bukketArr.includes(articul)){
                return;
            }
            bukketArr.push(articul)
            localStorage.setItem("bukket", JSON.stringify(bukketArr));
        } else{
            localStorage.setItem("bukket",JSON.stringify([articul]));
        }
    })
})