const requestURL = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
const request = new Request(requestURL,{method:"GET"});
const miqueias = "https://miqueiassousa.github.io/json/irineustore.json"
const rmiqueias = new Request(miqueias,{method:"GET"});

async function jayson() {
    const response = await fetch(request);
    const result = await response.json();
    console.log(JSON.stringify(result));
    const dol = result["USDBRL"]["bid"];

    alert(dol);
}

async function cep() {
    const cp = document.getElementById("cepstring").value;
    const requestURL2 = "https://cep.awesomeapi.com.br/json/value"

    //replace
    cp.replace("-","");
    requestURL2.replace("value",cp);
    const request2 = new Request(requestURL2,{method:"GET"});
    const response2 = await fetch(request2);
    const result2 = await response2.json();
    const place = result2["city"];
    alert(place);
}

async function miq() {
    const miqueiasresp = await fetch(rmiqueias);
    const miqueiasresl = await miqueiasresp.json();
    console.log(miqueiasresl);

    function replace(key,value) {
        if(key === "Notebook" || key ==="Acessórios") {
            return undefined;
        }
        return value;
    }
    //or delete miqueiasresl.Notebook
    // delete miqueiasresl.Acessórios
    
    console.log(JSON.parse(JSON.stringify(miqueiasresl,replace)));
}

const obj = {nome:"João",idade:23,cidade:"Xique-Xique"};

//parse,stringfy and replace
if(obj[1]<18) {
    console.log("Menor de idade");
}
else {console.log("Maior de idade");}

console.log(obj);
console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)))
console.log(JSON.parse(JSON.stringify(obj).replace(23,42)));

console.log(JSON.stringify(obj).replace("João","Carlos"));

// miq();

//callback functions
function myName(name) {
    alert("Hello "+name);
}

function askName(callback) {
    var n = prompt("Enter your name");
    callback(n);
}

// askName(myName);

let valStr = "50.5";
let pFloat = parseFloat(valStr);

console.log(valStr);
console.log(pFloat);

// slice
var n = "Whinderson";
console.log(n);
console.log(n.slice(0,3));
console.log(n.slice(0,n.length -2));

/*random(returns a random value between inclusive 0 and exclusive 1)
,floor(arredonda)
Math.floor(Math.random() * (max - min + 1)) + min*/

//var num = Math.floor(Math.random() * (7 - 1 + 1))+1;
//console.log(num);

//for,for in,foreach

let meuArray = [1,2,3,4];
let meuObj = {a:1,b:2,c:3};
let key = Object.keys(meuObj);
let value = Object.values(meuObj);

for (var i = 0;i<key.length;i++) {
    console.log(`Chave: ${key[i]} Valor: ${value[i]}`);
}

for(var k in key){console.log(`${key[k]} ${value[k]}`);}

const frutasObj = {
    Grape:3,
    Apple:4,
    Lemon:20
}

Object.keys(frutasObj).forEach((propriedade) => console.log(propriedade));
Object.values(frutasObj).forEach((propriedade) => console.log(propriedade));

Object.keys(frutasObj).forEach((propriedade) => console.log(`There are ${frutasObj[propriedade]} ${propriedade}(s)`));

// window functions

//window.onload = jayson();

const input = document.getElementsByClassName("num");

for (var i =0;i<=input.length;i++) {
    input[i].setAttribute("value",0)
}

function sum() {
    let h3 = document.querySelector(".total");
    
    let total = parseInt(input[0].value) + parseInt(input[1].value) 
    + parseInt(input[2].value);

    h3.innerHTML = total; 
}

function denilson() {
    for(var i=0;i<input.length;i++) {
        input[i].onchange = sum;
    }
}