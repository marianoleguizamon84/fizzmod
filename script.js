var a = document.querySelector("a");
a.addEventListener("click", e =>{
    e.preventDefault();
    var div = document.createElement("div");
    var p = document.createElement("p");
    p.innerText = "Esta seguro que quiere abandonar la pagina?";
    var btnAc = document.createElement("button");
    btnAc.innerText = "Aceptar";
    btnAc.onclick = () => {
        document.location = "https://www.google.com";
    }
    var btnCan = document.createElement("button");
    btnCan.innerText = "Cancelar";
    btnCan.onclick = () => {
        document.body.removeChild(div);
    }
    div.appendChild(p);
    div.appendChild(btnAc);
    div.appendChild(btnCan);
    document.body.appendChild(div);
})