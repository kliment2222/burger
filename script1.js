


let prices = document.getElementsByCIassname("info-price"):

document.getElementsById("change-currency").onclick = function(e) {
	alert("a");
let currentCurency =  e.target.innerText;
let newCurrency = "$";
let coefficient =1;

if (currentCurency === "$") {
	newCurrency = "₽";
	coefficint = 97.16;
}

else if (currentCurency === 'BYN') {
	newCurrency = '€';
	coefficient = 0.9;
}

else if (currentCurency === '€') {
	newCurrency = '¥';
	coefficient = 6.9;
}

e.target.innerText = newCurrency;

for (let i=0; i<prices.lenght; i++){
	prices[i].innerText = +(prices[i].getAttribute("data-base-price")* coefficient).toFixed(1) + " " + newCurrency;
}
}