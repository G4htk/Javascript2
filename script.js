let valor = document.querySelector("#valor");
let pago = document.querySelector("#pago");
let btcalcular = document.querySelector("#btcalcular");
let troco = document.querySelector("#troco");

function calcular(){
    let valorA = Number(valor.value);
    let valorB = Number(pago.value);
    let resultado = (valorB-valorA);
    troco.textContent = resultado;
}

btcalcular.onclick = function (){
    calcular();
}