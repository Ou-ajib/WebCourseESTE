const elemt = document.querySelector(".normal");

function eventClbk(e){
    console.log("clicked");
    elemt.classList.toggle("normal");

}

elemt.onclick = eventClbk;