const template = document.getElementById("bukket-good_template");
const content = template.content;

const renderRoot = document.getElementById("render_root");

function render(content, goodData) {
    content.querySelector(".bukket-good_name").innerText = goodData?.name;
    content.querySelector(".bukket-good_price").innerText = goodData?.price+"руб";
    content.querySelector(".bukket-good_image").setAttribute("src", goodData?.image);
    content.querySelector("label").setAttribute("for", goodData?.name);
    content.querySelector("input").setAttribute("id", goodData?.name);
    content.querySelector(".delate").setAttribute("data-article",goodData?.articul);
    document.querySelector(".price-buy").innerText = priceBuy() + "руб";
    document.querySelector(".price-buy2").innerText = priceBuy() + "руб";
    const clone = content.cloneNode(true);
    renderRoot.appendChild(clone);
}

function getData(){
    const store = localStorage.getItem("bukket")
    if (!store){
        return []
    }
    return JSON.parse(store);
}

function renderPage(){
    renderRoot.innerHTML = "";
    document.querySelector(".price-buy").innerText = "0,00руб";
    document.querySelector(".price-buy2").innerText = "0,00руб";
    const currentBukket = getData();
    currentBukket.forEach(el => {
        render(content, Bukket[el]);        
    });
    createListeners();
}

function createListeners(){
    const deleteBtns = document.querySelectorAll(".delate");
    deleteBtns.forEach(el=>{
        el.addEventListener("click",({target})=>{
            removeListeners();
            deleteItem(target.parentNode.getAttribute("data-article"));
        })
    });
    document.querySelectorAll(".pluse").forEach(el=>{
        el.addEventListener("click",(el)=>{
            counterHandler(el.target, 1)
        })
    })
    document.querySelectorAll(".minus").forEach(el=>{
        el.addEventListener("click",(el)=>{
            counterHandler(el.target, -1)
        })
    })
}

function deleteItem(articul) {
    const data = getData().filter(el => el != articul);
    localStorage.setItem("bukket", JSON.stringify(data));
    renderPage();
}

function removeListeners() {
    const deleteBtns = document.querySelectorAll(".delate");
    document.querySelectorAll(".pluse").forEach(el=>{
        el.removeEventListener("click",()=>{})
    });
    document.querySelectorAll(".minus").forEach(el=>{
        el.removeEventListener("click",()=>{})
    });
    deleteBtns.forEach(el=>{
        el.removeEventListener("click",()=>{})
    });
}

function counterHandler(target,items) {
    const counterBox = target.parentNode.parentNode.querySelector(".counter");
    if (items < 0 && counterBox.innerText <=0){
        return;
    }
    counterBox.innerText = counterBox.innerText*1 + items;
}

function priceBuy(){
    const currentBukket = getData();
    return currentBukket.reduce((acc,i) =>{
        return acc + Bukket[i].price
    },0)
}
renderPage();