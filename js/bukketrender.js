const template = document.getElementById("bukket-good_template");
const content = template.content;
const renderRoot = document.getElementById("render_root");

function render(content, goodData){
    content.querySelector(".bukket-good_name").innerText = goodData?.name;
    content.querySelector(".bukket-good_price").innerText = goodData?.price+"руб";
    content.querySelector(".bukket-good_image").setAttribute("src", goodData?.image);
    content.querySelector("label").setAttribute("for", goodData?.name);
    content.querySelector("input").setAttribute("id", goodData?.name);
    content.querySelector(".delate").setAttribute("data-article",goodData?.articul);
    const clone = content.cloneNode(true);
    renderRoot.appendChild(clone);
}

function getData(){
    const store = localStorage.getItem("bukket");
    if (!store){
        return []
    }
    return JSON.parse(store);
}

function renderPage(){
    renderRoot.innerHTML = "";
    const currentBukket = getData();
    currentBukket.forEach(element => {
        render(content, Bukket[element])        
    });
    createListeners();
}

function createListeners (){
    const deleteBtns = querySelectorAll(".delate");
    deleteBtns.forEach(element=>{
        element.addEventListener("click",({target})=>{
            removeListeners();
            deleteItem(target.parentNode.getAttribute("data-article"));
        })
    });
    document.querySelectorAll(".pluse").forEach(el=>{
        el.addEventListener("click",)
    })
}