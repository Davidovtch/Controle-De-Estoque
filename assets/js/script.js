const requestURL = "https://miqueiassousa.github.io/json/irineustore.json";
const request = new Request(requestURL,{method: "GET"}); 
const price = document.getElementsByClassName("price");
const total = document.getElementById("total");
const input = document.getElementById("quantity");
const inp = document.getElementsByClassName("form-control quantity");

total.textContent = `R$ 0`;
total.setAttribute("value",0);

window.onload = jayson();

async function jayson() {
    const response = await fetch(request);
    const result = await response.json();
    const notebookP = result["Notebook"][0]["Preço"];
    const cellphoneP = result["Celular"][0]["Preço"];
    const accessoriesP = result["Acessórios"][0]["Preço"];
    const arrayPrice = [notebookP,cellphoneP,accessoriesP];
    
    for (var i=0;i<=price.length;i++) {
        price[i].innerHTML = `R$ ${arrayPrice[i]}`;
        price[i].setAttribute("value",arrayPrice[i]);
    }

    for (var i =0;i<=inp.length;i++) {
        inp[i].setAttribute("value",0);
    }

    function multiply() {
        let value =(parseInt(inp[0].value)*parseInt(arrayPrice[0])+
        parseInt(inp[1].value)*parseInt(arrayPrice[1])+
        parseInt(inp[2].value)*parseInt(arrayPrice[2]));
        total.innerHTML = `R$ ${value}` 
    }

    function watch() {
        for(var i=0;i<inp.length;i++) {
            inp[i].onchange = multiply;
        }
    }

    watch();
}