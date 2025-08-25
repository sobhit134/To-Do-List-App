//for TODO list items
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let dbtn = document.createElement("button");
    dbtn.innerText = "delete";
    dbtn.classList.add("delete");

    item.appendChild(dbtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        let par = event.target.parentElement;
        par.remove();
    }
});

